function About() {
  return (
    <article className="flex justify-center gap-4 relative flex-wrap flex-col items-center w-full min-h-screen xl:px-36 xl:py-0 sd:py-16 xsm:py-24">
      <div id="about-content" className="flex flex-col w-full mt-7 relative text-left">
        <h1 className="font-regular text-2xl flex font-semibold text-slate-300 text-start tracking-tight mb-3 before:text-[16px] before:text-lg before:font-medium after:bg-slate-600 after:msd:w-60 after:sm:w-52 after:xsm:w-[96px] ">About Me</h1>
        <p className="relative font-regular pt-5  tracking-tight msd:text-sd xsm:text-[14px]">Hello! My Name is Mayank and I love to develop Website and work on ML models. Though I have had an encounter with basics of HTML & CSS back in 6th grade, but for me a complete new journey in web development began in 2021 and fast forward to today, I have developed various small and mid-scale scale projects acquiring great skills in HTML & CSS!.</p>
        <p className="relative font-regular pt-2  tracking-tight msd:text-sd xsm:text-[14px] ">Talking about Machine learning, my journey began with an excitement to learn something very new and with building a simple classification model. Fast forward to today, I am able to develop prediction models based on classical and deep learning models.</p>
        <p className="relative font-regular pt-2  tracking-tight msd:text-sd xsm:text-[14px] ">Here are a few technical skills I’ve been acquired along the way :</p>
      </div>
      <ul id="skills-content" className="relative grid tracking-tight xsm:grid-cols-3 lg:grid-cols-5 w-full text-left py-4 sm:px-2 xsm:px-0 msd:text-sd xsm:text-[13px]">
        <li className="font-regular">Javascript</li>
        <li className="font-regular">Python</li>
        <li className="font-regular">Java</li>
        <li className="font-regular">React Js</li>
        <li className="font-regular">Next Js</li>
        <li className="font-regular">Tailwind</li>
        <li className="font-regular">BootStarp</li>
        <li className="font-regular">CSS</li>
        <li className="font-regular">Pandas</li>
        <li className="font-regular">Numpy</li>
        <li className="font-regular">Matplotlib</li>
        <li className="font-regular">MongoDB</li>
        <li className="font-regular">MySql</li>
        <li className="font-regular">Git</li>
        <li className="font-regular">Github</li>
      </ul>
    </article>
  )
}

export default About