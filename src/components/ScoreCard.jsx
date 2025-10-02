import CustomPieChart from "./CustomPieChart";

export default function ScoreCard() {
  
  return (
    <section className="shadow-[0_0_48px_rgba(31,90,133,0.2)] bg-white rounded-lg">
      <div className="text-center pt-8">
        <h1 className="text-2xl font-bold text-primary-black mb-[-20px]">Hello, Rahul L.</h1>
        <div className="flex justify-center relative">
          <CustomPieChart />
          <div className="absolute w-16 h-16 overflow-hidden bottom-1 z-1 hidden sm:block">
            <div className="absolute w-16 h-16 bg-custom-grey rounded-full top-1/2" />
          </div>
        </div>

        <div className="text-primary-black font-bold text-[40px] text-center mb-1">
          767
        </div>
        <p className="text-primary-black text-center text-sm sm:text-lg mb-4">
          is your <span className="text-[#00A6CA]">NB</span> Score as of 19th Apr '22
        </p>
        
        <div className="flex flex-col sm:flex-row items-center bg-white justify-between py-4 px-6 sm:h-20 shadow-[0_0_48px_rgba(31,90,133,0.2)] rounded-b-lg">
          <a href="#" className="text-custom-blue-2 text-base font-medium underline">Score Analysis</a>
          <button className="bg-[#FDDC02] w-[238px] h-12 flex items-center justify-center text-black rounded-[40px] text-base font-medium mt-4 sm:mt-0">
            Refresh Now
          </button>
        </div>
      </div>
    </section>
  );
}