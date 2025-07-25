function Work() {
  return (
    <article className="flex justify-center font-semibold relative flex-wrap flex-col items-center w-full min-h-screen 
    xl:px-96 lg:px-36 sm:px-20 xsm:px-6 xl:py-0 sd:py-16 xsm:py-8">
      <div id="work-content" className="flex flex-col w-full relative text-left">
        <h1 className="flex items-center font-semibold font-hero text-neutral-800 msd:text-[2.2rem] xsm:text-[1.6rem] text-start mb-3 before:text-lg before:font-medium after:bg-slate-600 after:msd:w-60 after:sm:w-40 after:xsm:w-[32px]">My Experience</h1>
        <div className="relative sd:pt-5 xsm:pt-1 text-left sd:text-sd xsm:text-[12px]">
          <h2 className="font-hero sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] tracking-tighter" >SOC Analyst Intern 
            <span className="text-[#FFBE42] font-regular font-medium sd:text-[1.6rem] msd:text-[1.2rem] xsm:text-[15px]"> @Radware</span></h2>
          <p className="sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] font-medium">Sep 2024 - present</p>
          <ul className="pt-2 pl-3 text-left sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] tracking-tight">
            <li>Monitored and analyzed global customer
              traffic across Radware's security platform for
              threats like Web DDoS, API abuse, SQL
              injection, and Carpet Bombing attacks.</li>
            <li>Responded to real-time incidents with
              mitigation strategies, tuning security policies,
              and analyzing anomaly behavior.</li>
            <li>Gained hands-on experience with CDN, WAF,
              and behavioral-based threat detection
              models.</li>
            <li>Assisted in creating detailed incident reports
              and proactive refinement for client-specific
              threat profiles.</li>
          </ul>
          <h2 className="font-hero sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] tracking-tighter pt-3" >Frontend Intern 
            <span className="text-[#FFBE42] font-regular font-medium sd:text-[1.6rem] msd:text-[1.2rem] xsm:text-[15px]"> @ScienceOverse</span></h2>
          <p className="sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] font-medium">Apr 2024 - May 2024</p>
          <ul className="pt-2 pl-3 text-left sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] tracking-tight">
            <li>Developed interactive and responsive
              webpages using React, Next.js, and Tailwind
              CSS, enhancing user experience and website
              functionality.</li>
            <li>Resolved high-priority website bugs,
              improving overall system stability and
              performance leading to a seamless and user-
              friendly experience.</li>
          </ul>
          <h2 className="font-hero sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] tracking-tighter pt-3" >Data Science Intern 
            <span className="text-[#FFBE42] font-regular font-medium sd:text-[1.6rem] msd:text-[1.2rem] xsm:text-[15px]"> @Let'sGrowMore</span></h2>
          <p className="sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] font-light">Apr 2024 - May 2024</p>
          <ul className="pt-2 pl-3 text-left sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] tracking-tight">
            <li>Implemented and evaluated decision treebased ML models for 
              supervised learning tasks.</li>
            <li>Designed and Built a photo-to-pencil sketch
              converter using OpenCV and Python.</li>
          </ul>
        </div>
      </div>
      <div></div>
    </article>
  )
}

export default Work