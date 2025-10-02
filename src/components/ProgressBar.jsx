import Triangle from '../assets/triangle.svg';
import TriangleWhite from '../assets/triangle-white.svg';

export default function ProgressBar() {
  return (
    <div className="rounded-xl bg-[#F7F9FA] p-6">
      <div className="p-6 bg-white rounded-[5px] progress-container">
        <div className="flex gap-1 h-14 relative progress-styles">
          <div className="w-[15%] bg-[#E15825] flex items-center rounded-[8px_0_0_8px]">
            <span className="text-white px-3 font-bold text-xs sm:text-lg">15%</span>
          </div>
          <div className="w-[22%] bg-[#F18200] flex items-center">
            <span className="text-white px-3 font-bold text-xs sm:text-lg">22%</span>
          </div>
          <div className="w-[26%] bg-[#FCD800] flex items-center">
            <span className="text-white px-3 font-bold text-xs sm:text-lg">26%</span>
          </div>
          <div className="w-[18%] bg-[#A9D161] flex items-center">
            <span className="text-white px-3 font-bold text-xs sm:text-lg">18%</span>
          </div>
          <div className="w-[19%] bg-[#009900] flex items-center rounded-[0_8px_8px_0]">
            <span className="text-white px-3 font-bold text-xs sm:text-lg">19%</span>
          </div>
          <img src={TriangleWhite} alt="triangle-outline" className="w-4 h-2 absolute bottom-[-5px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <img src={Triangle} alt="triangle" className="w-4 h-2 absolute bottom-[-9px] left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <p className="text-primary-black text-sm font-bold mt-4 text-center">
          Your NB Score
        </p>
        <p className="text-primary-black text-[40px] font-bold text-center border-b border-[#D9D9D9]">
          767
        </p>
        <div className="flex flex-col lg:flex-row items-center gap-4 xl:gap-8 py-4 justify-center">
          <p className="text-primary-black">Score Range</p>
          <div className="flex items-center">
            <div className="w-[14px] h-[14px] bg-[#E15825] mr-1" />
            <span className="text-secondary-black font-bold text-base">300-722</span>
          </div>
          <div className="flex items-center">
            <div className="w-[14px] h-[14px] bg-[#F18200] mr-1" />
            <span className="text-secondary-black font-bold text-base">723-747</span>
          </div>
          <div className="flex items-center">
            <div className="w-[14px] h-[14px] bg-[#FCD800] mr-1" />
            <span className="text-secondary-black font-bold text-base">748-764</span>
          </div>
          <div className="flex items-center">
            <div className="w-[14px] h-[14px] bg-[#A9D161] mr-1" />
            <span className="text-secondary-black font-bold text-base">765-777</span>
          </div>
          <div className="flex items-center">
            <div className="w-[14px] h-[14px] bg-[#009900] mr-1" />
            <span className="text-secondary-black font-bold text-base">778-900</span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-primary-black text-base mt-6 text-center">Your NB Score lies in the top 70% in All Of India.</p>
        <p className="text-primary-black text-sm mt-1 text-center">Based on the NB Data</p>
      </div>
    </div>
  );
}