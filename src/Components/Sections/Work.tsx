function Work() {
  return (
    <article className="flex justify-center gap-4 relative flex-wrap flex-col items-center w-full min-h-screen xl:px-64 lg:px-6 sm:px-20 xsm:px-6 sd:py-36 xsm:pb-12 xsm:pt-0 ">
      <div id="work-content" className="flex flex-col w-full sm:mt-7 xsm:mt-2 relative">
        <h1 className="font-regular text-2xl flex font-semibold text-slate-300 text-start mb-3 before:text-lg before:font-medium after:bg-slate-600 after:xsm:w-18 after:msd:w-52 after:sd:w-64 after:xsm:w-14">My Experience</h1>
        <div className="relative font-regular pt-5 text-left text-sd">
          <h2 className="font-hero font-medium text-xl" >Frontend Intern <span className="text-teal-400">@ ScienceOverse</span></h2>
          <p className="font-regular text-sd font-light">Apr 2024 - May 2024</p>
          <ul className="font-regular pt-2 pl-3 text-left">
            <li>Successfully developed multiple interactive and responsive webpages using React, Next.js, and Tailwind CSS,
              contributing to the overall user experience and functionality of the website.</li>
            <li>Identified, debugged, and resolved critical issues across the website, improving stability and performance,
              which led to a more efficient and user-friendly application.</li>
          </ul>
          <h2 className="font-hero font-medium text-xl mt-4" >Data Science Intern <span className="text-teal-400">@ Let'sGrowMore</span></h2>
          <p className="font-regular text-sd font-light">April 2024 - May 2024</p>
          <ul className="font-regular pt-2 pl-3 text-left">
            <li>Improved familiarity with ML and Decision Tree Models with practical use case. </li>
            <li>Engineered a simple solution to convert photos to pencil drawings using OpenCV and Python.</li>
          </ul>
        </div>
      </div>
      <div></div>
    </article>
  )
}

export default Work