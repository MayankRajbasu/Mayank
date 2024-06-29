function About() {
  return (
    <article className="flex justify-center gap-4 relative flex-wrap flex-col items-center w-full h-screen xl:px-64 lg:px-6 sm:px-20 xsm:px-6 sd:py-36 xsm:pb-12 xsm:pt-0 ">
      <div id="about-content" className="flex flex-col w-full sd:mt-7 xsm:mt-2 relative">
        <h1 className="font-regular sd:text-2xl xsm:text-[22px] flex font-semibold text-slate-300 text-start mb-3 before:text-[16px] sd:before:text-lg before:font-medium after:bg-slate-600 after:xsm:w-24 after:msd:w-52 after:sd:w-64 after:xsm:mt-1">About Me</h1>
        <p className="relative font-regular pt-5 text-left sd:text-sd xsm:text-[12px]">Hello! My Name is Mayank and I love to develop Website and work on ML models. Though I have had an encounter with basics of HTML & CSS back in 6th grade, but for me a complete new journey in web development began in 2021 and fast forward to today, I have developed various small and mid-scale scale projects acquiring great skills in HTML & CSS!.</p>
        <p className="relative font-regular pt-2 text-left sd:text-sd xsm:text-[12px]">Talking about Machine learning, my journey began with an excitement to learn something very new and with building a simple classification model. Fast forward to today, I am able to develop prediction models based on classical and deep learning models.</p>
        <p className="relative font-regular pt-2 text-left sd:text-sd xsm:text-[12px]">Here are a few technical skills I’ve been acquired along the way :</p>
      </div>
      <ul id="skills-content" className="relative grid xsm:grid-cols-3 lg:grid-cols-5 w-full text-start py-4 sm:px-2 xsm:px-0 sd:text-sd xsm:text-[12px]">
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
        <li className="font-regular">Matplotlib</li>sd:
        <li className="font-regular">MongoDB</li>
        <li className="font-regular">MySql</li>
        <li className="font-regular">Git</li>
        <li className="font-regular">Github</li>
      </ul>
    </article>
  )
}

export default About