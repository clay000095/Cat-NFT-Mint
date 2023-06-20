const { ethers } = require('hardhat')
const fs = require('fs')

async function main() {
  const base_uri = 'https://ipfs.io/ipfs/QmZWzKQo5gaucLrXzghqpTkYMmV6f1XBKh2MFTNGGMY2qL/'
  const Contract = await ethers.getContractFactory('Kevin')
  const contract = await Contract.deploy('Keivn NFT', 'KN', base_uri)

  await contract.deployed()

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})