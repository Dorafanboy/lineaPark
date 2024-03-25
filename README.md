1. Для установки, ввести в терминале npm install.
2. В файле config.ts из папки src указать telegramBotId, telegramId.
3. Если необходимо пополнять ETH с OKX, переимновать файл .env.example в .env, и указать параметры API.
4. Приватники добавить в файл private_keys.txt(src/assets) каждый приватник с новой строки, начинающийся с 0x.
5. Для запуска софта, перейти в папку src, ввести команду ts-node index.ts.
6. Отработанные аккаунты софт записывает в файл completed_accounts.txt(src/assets).
7. Аккаунты, отработанные с ошибкой запишет в uncompleted_accounts.txt(src/assets).
8. Пояснение настройки записано в конфиге.
9. Если необходимо выключить выполнение каких-то квестов isUse вместо true поставить false, или наоборот.

Софт выполняет следующие задания (имя класса в конфиге - ссылка на задание из layer 3)
1. Week1GamerBoomSignProof - https://layer3.xyz/quests/linea-gamerboom
2. Week1GamerBoomMintNFT - https://layer3.xyz/quests/linea-gamerboom
3. Week1NidumBatch - https://layer3.xyz/quests/linea-sidus
4. Week2Yooldo - https://layer3.xyz/quests/linea-yooldo
5. Week3SendingMe - https://layer3.xyz/quests/linea-sending-me 
6. Week3BitAvatar - https://layer3.xyz/quests/linea-bitavatar
7. Week3ReadOn - https://layer3.xyz/quests/linea-readon
8. Week3GamicHub - https://layer3.xyz/quests/linea-gamic-app
9. Week3Dmail - https://layer3.xyz/quests/linea-dmail
10. Week4LuckyCat - https://layer3.xyz/quests/linea-timeless-wallet
11. Week5Omnizone - https://layer3./quests/linea-brototype
12. Week5Battlemon - https://layer3.xyz/quests/linea-battlemon

Со всех квестов выходиит 370 LXP.
