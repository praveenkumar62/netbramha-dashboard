import Warning from '../assets/warning.svg';
import FileSearch from '../assets/file-search.svg';

export default function Disputes() {

  return (
    <>
      <section className="shadow-[0_4px_20px_rgba(0,58,87,0.05)] rounded-lg border-t border-[#00A6CA]">
        <div className="flex">
          <div className="w-12 bg-[#E0F9FF] flex justify-center items-start pt-6 rounded-[8px_0_0_8px]">
            <img src={Warning} alt="total disputes" width={22} height={22} />
          </div>
          <article className="py-5 px-3 w-full">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-custom-blue-1 text-base font-bold">Total Disputes</h2>
              <p className="text-primary-black text-lg font-bold">12</p>
            </div>
            <p className="text-secondary-black text-sm mb-1">
              Learn more about credit reporting and related policies.
            </p>
            <a href="#" className="text-custom-blue-2 text-sm font-medium underline">Read More</a>
          </article>
        </div>
      </section>
      <section className="mt-5 shadow-[0_4px_20px_rgba(0,58,87,0.05)] rounded-lg border-t border-[#00A6CA]">
        <div className="flex">
          <div className="w-12 bg-[#E0F9FF] flex justify-center items-start pt-6 rounded-[8px_0_0_8px]">
            <img src={FileSearch} alt="total enquiries" width={22} height={22} />
          </div>
          <article className="py-5 px-3 w-full">
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-custom-blue-1 text-base font-bold">Total Enquiries</h2>
              <p className="text-primary-black text-lg font-bold">05</p>
            </div>
            <p className="text-secondary-black text-sm">
              (In last 3 years)
            </p>
          </article>
        </div>
      </section>
    </>
  )
}