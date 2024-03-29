import {
    createPublicClient,
    createWalletClient,
    formatUnits,
    http,
    PrivateKeyAccount,
    SimulateContractReturnType,
} from 'viem';
import { printError, printInfo, printSuccess } from '../../../data/logger/logPrinter';
import { checkGwei } from '../../../data/helpers/gweiChecker';
import { linea } from 'viem/chains';
import { Config, Week6FrogWarBonus, Week6FrogWarBonusRevokeApproval } from '../../../config';
import { addTextMessage } from '../../../data/telegram/telegramBot';
import {
    claimValue,
    currency,
    frogWarContractAddress,
    claimRebetContractAddress,
    proof,
    rebetCurrency,
    stakeRebetContractAddress,
} from './frogWarData';
import { frogWarABI } from '../../../abis/frogWar';
import { frogWarClaimRebetABI } from '../../../abis/frogWarClaimRebet';
import { delay } from '../../../data/helpers/delayer';
import {frogWarStakeRebetABI} from "../../../abis/frogWarStakeRebet";

export async function claimFrogWar(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week6 - Claim. Frog War`);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Claim за ${formatUnits(claimValue, 18)} ETH`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: frogWarContractAddress,
            abi: frogWarABI,
            functionName: 'claim',
            account: account,
            value: claimValue,
            nonce: nonce,
            args: [account.address, 1, 1, currency, claimValue, [[proof], 1, claimValue, currency], '0x'],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week6 - Claim: Frog War <a href='${url}'>link</a>`);
    }

    if (Week6FrogWarBonus.isUse) {
        await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
        await claimRebet(account);
        return false;
    }

    return true;
}

export async function claimRebet(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week6 - Claim Rebet. Frog War(Bonus)`);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Claim Rebet`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: claimRebetContractAddress,
            abi: frogWarClaimRebetABI,
            functionName: 'claim',
            account: account,
            nonce: nonce,
            args: [account.address, 6, 1, rebetCurrency, 0, [[proof], 1, 0, rebetCurrency], '0x'],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim Rebet - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Claim Rebet - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week6 - Claim Rebet: Frog War(Bonus) <a href='${url}'>link</a>`);

        await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
        await setApprovalForAll(account, true);

        await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
        await stakeRebet(account);
    }

    return true;
}

export async function setApprovalForAll(account: PrivateKeyAccount, isApproved: boolean) {
    printInfo(`Выполняю модуль ${isApproved ? ' Give' : 'Revoke'} Set ApprovalFor All`);

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Set Approval For All`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: claimRebetContractAddress,
            abi: frogWarClaimRebetABI,
            functionName: 'setApprovalForAll',
            account: account,
            nonce: nonce,
            args: [stakeRebetContractAddress, isApproved],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(
                `Произошла ошибка во время выполнения модуля ${isApproved ? ' Give' : 'Revoke'} Set ApprovalFor All - ${e}`,
            );
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(
                `Произошла ошибка во время выполнения модуля ${isApproved ? ' Give' : 'Revoke'} Set ApprovalFor All - ${e}`,
            );
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(
            `✅Week6 - ${isApproved ? 'Give' : 'Revoke'} Set ApprovalFor All : Frog War(Bonus) <a href='${url}'>link</a>`,
        );
    }

    return false;
}

export async function stakeRebet(account: PrivateKeyAccount) {
    printInfo(`Выполняю модуль Week6 - Stake Rebet. Frog War(Bonus)`);

    await checkGwei();

    const lineaClient = createPublicClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    printInfo(`Вызываю функцию Stake Rebet`);

    const walletClient = createWalletClient({
        chain: linea,
        transport: Config.rpc.url == '' ? http() : http(Config.rpc.url),
    });

    const nonce = await lineaClient.getTransactionCount({ address: account.address });
    const transferRequest = await lineaClient
        .simulateContract({
            address: stakeRebetContractAddress,
            abi: frogWarStakeRebetABI,
            functionName: 'stake',
            account: account,
            nonce: nonce,
            args: [6],
        })
        .then((result) => result as SimulateContractReturnType)
        .catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Stake Rebet - ${e}`);
            return { transferRequest: undefined };
        });

    if (transferRequest !== undefined && 'request' in transferRequest) {
        const hash = await walletClient.writeContract(transferRequest!.request).catch((e) => {
            printError(`Произошла ошибка во время выполнения модуля Stake Rebet - ${e}`);
            return false;
        });

        if (hash == false) {
            return false;
        }

        const url = `${linea.blockExplorers?.default.url + '/tx/' + hash}`;

        printSuccess(`Транзакция успешно отправлена. Хэш транзакции: ${url}\n`);

        await addTextMessage(`✅Week6 - Stake Rebet: Frog War(Bonus) <a href='${url}'>link</a>`);

        if (Week6FrogWarBonusRevokeApproval.isUse) {
            await delay(Config.delayBetweenModules.min, Config.delayBetweenModules.max, true);
            await setApprovalForAll(account, false);
        }
    }

    return true;
}
