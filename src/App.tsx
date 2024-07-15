import { useState } from "react"

function App() {
  const [modalShare, setModalShare] = useState(false)

  function OpenModal() {
    if(modalShare === false){
      setModalShare(true)
    }else {
      setModalShare(false)
    }
    
  }

  return (
    <div className="bg-LigthGrayishBlue flex items-center justify-center h-svh p-5">
      <div className="flex flex-col lg:flex-row shadow-xl lg:w-2/5 relative">
        <div className="lg:w-1/3 rounded-t-xl lg:rounded-t-none lg:rounded-l-xl bg-drawers bg-center bg-cover h-60 lg:h-auto"></div>
        <div className="lg:w-2/3 bg-white rounded-b-xl lg:rounded-r-xl p-10 gap-5 flex flex-col">
          <h1 className="text-VeryDarkGrayishBlue font-bold text-xl gap-5">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p className="text-GrayishBlue text-13px font-medium">Ever been in a room felt like something was missing? Perhaps ir felt slightly bare and univiting. I've got some simple tips to help you make any room feel complete.</p>
          <div className="flex flex-row gap-5 justify-between items-center">
            <div className="flex flex-row gap-5">
            <img src="./avatar-michelle.jpg" alt="Michele" className="h-10 w-10 rounded-full"/>
            <div>
              <h3 className=" text-VeryDarkGrayishBlue font-bold text-13px">Michelle Appleton</h3>
              <p className="text-DesaturatedDarkBlue font-normal text-13px">29 jun 2020</p>
            </div>
            </div>
            <button onClick={OpenModal} className="bg-gray-200 p-2 rounded-full cursor-pointer">
            <img src="./icon-share.svg" alt="Share" className="h-4 w-4"/>
            </button>
          </div>
        </div>
        {modalShare && (
          <div className="flex flex-row bg-VeryDarkGrayishBlue p-5 gap-4 lg:gap-7 justify-between absolute bottom-0 w-full lg:w-auto lg:-right-20 lg:bottom-24 rounded-b-xl lg:rounded-xl">
            <div className="flex flex-row gap-4">
            <p className="text-gray-200">S H A R E</p>
            <img src="./icon-facebook.svg" alt="Facebook" className="h-6 w-6 cursor-pointer"/>
            <img src="./icon-twitter.svg" alt="twitter" className="h-6 w-6 cursor-pointer"/>
            <img src="./icon-pinterest.svg" alt="pinterest" className="h-6 w-6 cursor-pointer"/>
            </div>
            <div>
            <button onClick={OpenModal} className="lg:hidden bg-gray-200 p-2 rounded-full cursor-pointer">
            <img src="./icon-share.svg" alt="Share" className="h-4 w-4"/>
            </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
