import Report from "../assets/images/report.svg";
import Report2 from "../assets/images/report2.svg";
import Eye from "../assets/eye.svg";
import Download from "../assets/file-download.svg";
import ChevronRight from "../assets/chevron-right.svg";

export default function NbReports() {
  return (
    <>
      <section className="bg-white rounded-md py-6 px-8">
        <div className="flex">
          <div className="mr-12">
            <h2 className="text-custom-blue-1 font-bold text-lg mb-2">NB REPORT</h2>
            <p className="text-primary-black text-base">
              Get your personalized NB Report to plan your financial future.
            </p>
          </div>
          <img src={Report} alt="report" width={80} height={80} />
        </div>
        <div className="mt-5">
          <p className="flex gap-2 mb-3">
            <img src={Eye} alt="view NB report" />
            <a className="text-custom-blue-2 font-medium text-base underline" href="#">View Your NB Report</a>
            <img src={ChevronRight} alt="view NB report link" />
          </p>
          <p className="flex gap-2">
            <img src={Download} alt="download NB report" />
            <a className="text-custom-blue-2 font-medium text-base underline" href="#">Download Your NB Report with summary</a>
            <img src={ChevronRight} alt="download NB report link" />
          </p>
        </div>
      </section>
      <article className="flex bg-white rounded-md py-6 px-8 mt-4 bg-[linear-gradient(to_bottom_left,#FFF8D4,#FEEF93)]">
        <p className="text-primary-black text-base ">
          You currently have an active subscription. 
          You will be able to access Free Annual NB Score & Report 
          after the subscription period expires.
        </p>
        <img src={Report2} alt="NB report" width={182} height="auto" />
      </article>
    </>
  )
}