import { useState } from 'react';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import NbReports from './components/NbReports';
import ScoreChart from './components/ScoreChart';
import ScoreCard from './components/ScoreCard';
import Accounts from './components/Accounts';
import Disputes from './components/Disputes';

import Info from './assets/info.svg';
import ProgressBar from './components/ProgressBar';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Topbar handleMobileMenuClick={() => setIsSidebarOpen(true)} isSidebarOpen={isSidebarOpen} />
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="pt-[60px] md:pl-[260px]">
        <main tabIndex="-1" className="min-h-screen" role="main">
          <div className="bg-[#F7F9FA] px-5 md:px-0">
            <div className="flex gap-5 pt-8 pb-10 md:px-10 max-w-[1106px] mx-auto flex-col lg:flex-row">
              <div className="w-full lg:w-1/2">
                <ScoreCard />
              </div>
              <div className="w-full lg:w-1/2">
                <NbReports />
              </div>
            </div>
          </div>

          <div className="bg-white pt-14 px-5 md:px-0">
            <div className="flex gap-5 py-2 md:px-10 max-w-[1106px] mx-auto flex-col lg:flex-row">
              <div className="w-full lg:w-2/3">
                <Accounts />
              </div>
              <section className="w-full lg:w-1/3">
                <Disputes />
              </section>
            </div>
          </div>

          <div className="bg-white pt-14 px-5 md:px-0">
            <div className="py-2 md:px-10 max-w-[1106px] mx-auto">
              <h2 className="text-custom-blue-1 font-bold text-lg mb-3">
                NB SCORE HISTORY
                <img src={Info} alt="score history" width={24} height={24} className="inline-block cursor-pointer ml-2 vertical-align-text-bottom" />
              </h2>
              <ScoreChart />
            </div>
          </div>

          <div className="bg-white pt-14 px-5 md:px-0 mb-16">
            <div className="py-2 md:px-10 max-w-[1106px] mx-auto">
              <h2 className="text-custom-blue-1 font-bold text-lg mb-3">
                WHERE YOU STAND
                <img src={Info} alt="where you stand" width={24} height={24} className="inline-block cursor-pointer ml-2 vertical-align-text-bottom" />
              </h2>
              <ProgressBar />
            </div>
          </div>

        </main>

        <footer className="bg-white border-t border-[#D9D9D9] py-4 px-5 md:px-0">
          <div className="max-w-[1106px] mx-auto">
            <p className="text-center text-sm text-primary-black mb-3">
              © Copyright 2025 NetBramha Studio LLP. All Rights Reserved.
            </p>
            <nav className="flex flex-col sm:flex-row text-center sm:text-left justify-center gap-4 sm:gap-10 text-sm mb-2">
              <a href="#" className="text-primary-black underline text-sm">
                FAQs
              </a>
              <a href="#" className="text-primary-black underline text-sm">
                Terms and Conditions
              </a>
              <a href="#" className="text-primary-black underline text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-black underline text-sm">
                Raise a Dispute
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
