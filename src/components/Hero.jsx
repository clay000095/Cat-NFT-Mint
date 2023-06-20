import avatar from '../assets/owner.jpg'
import github from '../assets/github_icon.png'
import facebook from '../assets/facebook_icon.png'
import twitter from '../assets/twitter_icon.png'
import linkedIn from '../assets/linkedIn_icon.png'
import medium from '../assets/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../Kevin'

const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://imageio.forbes.com/specials-images/imageserve/611148d8a4e320b4ed29e63e/3d-render--abstract-background--cosmic-landscape--round-portal--pink-blue-neon-light-/960x0.jpg?format=jpg&width=960')]
      bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
             <br />
            <span className="text-gradient">NFTs</span>
          </h1>

          <p className="text-white font-semibold text-sm mt-3">
            鑄造這些NFT並且記得好好收藏他們
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4"
            onClick={onMintNFT}
          >
            Mint Now
          </button>

          <p className="text-white text-sm font-medium text-center">
            來鑄造NFT吧，看你有多少錢
          </p>
        <div>
          <div
              className="shadow-xl shadow-black flex flex-row
              justify-center items-center w-10 h-10 rounded-full
            bg-white cursor-pointer p-3 ml-4 text-black 
              hover:bg-[#bd255f] hover:text-white transition-all
              duration-75 delay-100"
            >
              <span className="text-xs font-bold">{nfts.length}/16</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
