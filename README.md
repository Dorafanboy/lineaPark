1. Для установки, ввести в терминале npm install.
2. В файле config.ts из папки src указать telegramBotId, telegramId.
3. Если необходимо пополнять ETH с OKX, переимновать файл .env.example в .env, и указать параметры API.
4. Приватники добавить в файл private_keys.txt(src/assets) каждый приватник с новой строки, начинающийся с 0x.
5. Для запуска софта, перейти в папку src, ввести команду ts-node index.ts.
6. Отработанные аккаунты софт записывает в файл completed_accounts.txt(src/assets).
7. Аккаунты, отработанные с ошибкой запишет в uncompleted_accounts.txt(src/assets).
8. Пояснение настройки записано в конфиге.
9. Если необходимо выключить выполнение каких-то квестов/прохождения POH isUse вместо true поставить false, или наоборот.
10. В конфиге (class Config переменная mode) указать режим работы 'POH' если необходимо проходить POH на аккаунтах или 'quest' для выполенение ончейн транзакций.

Софт выполняет следующие задания (имя класса в конфиге - ссылка на задание из layer 3)
1. Week1GamerBoomSignProof - https://layer3.xyz/quests/linea-gamerboom
2. Week1GamerBoomMintNFT - https://layer3.xyz/quests/linea-gamerboom
3. Week1NidumBatch - https://layer3.xyz/quests/linea-sidus
4. Week1NidumBurn - https://layer3.xyz/quests/linea-sidus
5. Week2Yooldo - https://layer3.xyz/quests/linea-yooldo
6. Week3SendingMe - https://layer3.xyz/quests/linea-sending-me 
7. Week3BitAvatar - https://layer3.xyz/quests/linea-bitavatar
8. Week3ReadOn - https://layer3.xyz/quests/linea-readon
9. Week3GamicHub - https://layer3.xyz/quests/linea-gamic-app
10. Week3Dmail - https://layer3.xyz/quests/linea-dmail
11. Week4LuckyCat - https://layer3.xyz/quests/linea-timeless-wallet
12. Week5Omnizone - https://layer3./quests/linea-brototype
13. Week5Battlemon - https://layer3.xyz/quests/linea-battlemon
14. Week6Zace - https://layer3.xyz/quests/linea-zace
15. Week6Micro3 - https://layer3.xyz/quests/linea-micro3
17. Week6FrogWar - https://layer3.xyz/quests/frog-war-404
18. Week6FrogWarBonus - https://layer3.xyz/quests/frog-war-404
19. Week6Bilinear - https://layer3.xyz/quests/lineas-knobs-bilinear
20. Week6Acg - https://layer3.xyz/quests/linea-acg
21. Week6FrogWarBonusRevokeApproval - Для задания https://layer3.xyz/quests/frog-war-404 дается approve на доступ к NFT кошелька, если использовать isUse = true, то после выполнения этого квеста, approve отменяется

Также, софт проходит POH
1. LevelATrusta - Trusta Group A.
2. LevelBTrusta - Trusta Group B.
3. LevelBRubyscore - Rubyscore Group B.

Со всех квестов выходиит 515 LXP.
