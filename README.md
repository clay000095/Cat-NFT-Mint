# 這是個TechCat的NFT鑄造平台
![]

```sh 
yarn install
```
再來創一個.env，把裡面的換一換
```sh
ENDPOINT_URL=""
DEPLOYER_KEY="丟自己的georil private_key"
```
接下來要用hardaht，開一個Terminal
```sh 
yarn hardhat node
```
匯入一條新的localhost的鏈，RPC_URL就用預設應該是http://127.0.0.1:8545，鏈ID是31337，貨幣代碼放ETH，接者匯入其中一個10000ETH的帳戶的private_key

開另一個Split Terminal，把合約丟到鏈上

```sh
yarn hardhat run scripts/deploy.js --network localhost
yarn start
```

(有發生nonce的問題的話，到進階去Clear activity tab data可能可以解決)
