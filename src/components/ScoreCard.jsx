export default function ScoreCard() {
  return (
    <section className="shadow-[0_0_48px_rgba(31,90,133,0.2)] rounded-lg">
      <div className="text-center pt-6">
        <h1 className="text-2xl font-bold text-primary-black mb-4">Hello, Rahul L.</h1>
        
        <div className="flex justify-center mb-6">
          <div className="relative w-48 h-24">
            {/* Semi-circle gauge background */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-full h-full rounded-t-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 overflow-hidden"></div>
            </div>
            {/* Gauge needle */}
            <div className="absolute top-0 left-1/2 h-24 w-1 bg-gray-800 origin-bottom transform -translate-x-1/2 rotate-45"></div>
            {/* Score text */}
            <div className="absolute bottom-0 left-0 right-0 text-center">
              <div className="text-4xl font-bold">767</div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600">
          is your <span className="text-blue-600">NB</span> Score as of 19th Apr '22
        </p>
        
        <div className="flex items-center bg-white justify-between py-4 px-6 h-20  shadow-[0_0_48px_rgba(31,90,133,0.2)]">
          <a href="#" className="text-custom-blue-2 font-base font-medium underline">Score Analysis</a>
          <button className="bg-[#FDDC02] w-[238px] h-12 flex items-center justify-center text-black rounded-[40px] font-base font-medium">
            Refresh Now
          </button>
        </div>
      </div>
    </section>
  );
}