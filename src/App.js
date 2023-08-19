import './App.css';
import Carousel from "./components/Carousel";

function App() {

    const renderFloatingCard = () => {
        return (
            <div className="w-full px-[24px] top-[252px] absolute">
                <div className="w-full bg-white rounded-lg shadow border border-neutral-50 p-[24px] flex flex-col m-auto left-0 right-0">
                    <span className="text-gray-400 text-sm font-semibold leading-normal">Available Coin balance</span>
                    <span className="text-gray-900 text-5xl font-normal leading-[56px] mt-[8px]">340</span>
                    <div className="h-[5px] bg-zinc-200 rounded-sm my-[24px]">
                        <div className="w-48 h-[5px] absolute bg-blue-600 rounded-sm" />
                    </div>
                    <span className="text-neutral-400 text-base font-normal leading-normal">You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</span>
                    <div className="text-blue-600 text-base font-normal leading-normal mt-[16px] mb-[24px]">View tier benefits</div>
                    <div className="h-[60px] py-[18px] bg-gray-900 rounded justify-center items-center inline-flex">
                        <span className="text-center text-white text-lg font-semibold leading-normal">My Coupons</span>
                    </div>
                    <div className="text-center text-gray-400 text-sm font-normal leading-tight mt-[16px]">Updated : 02/11/2021</div>
                </div>
            </div>

        )
    }

  return (
      <div className="h-screen bg-white sm:bg-amber-300 w-screen md:w-fit lg:w-32 xl:w-3/4">
          <div className="w-full h-[428px] relative bg-gray-900">
              <div className="w-10 h-10 left-[24px] top-[60px] absolute bg-white rounded-full flex items-center justify-center">
                  <svg className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                  </svg>
              </div>
              <div className="mt-[116px] flex-col justify-start items-start gap-2 inline-flex px-[24px]">
                  <span className="text-white text-[32px] font-semibold leading-[40px]">Silver Tier</span>
                  <span className="text-gray-400 text-base font-normal leading-[24px]">In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</span>
              </div>
              {renderFloatingCard()}
          </div>
          <div className="pt-[240px] w-full bg-white">
              <Carousel title="Petrol"/>
              <Carousel title="Rental Rebate"/>
              <Carousel title="Food and Beverage"/>
          </div>
      </div>

  );
}

export default App;
