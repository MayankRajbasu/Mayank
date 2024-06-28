function Hero() {
  return (
    <article className="flex gap-5 lg:justify-between xsm:justify-center relative flex-wrap items-center w-full min-h-screen lg:px-36 xsm:px-6 xsm:py-12">
      <div id="content" className="flex flex-col">
        <p className="font-regular text-teal-400 font-normal lg:text-lg xsm:text-base xsm:py-2">Hi, my name is</p>
        <p className="font-hero lg:text-7xl text-slate-300 font-semibold xsm:text-5xl xsm:py-2">Mayank Raj.</p>
        <p className="font-hero lg:text-6xl font-medium xsm:text-4xl xsm:font-semibold pb-2 tracking-wide">I build things for the web and ML.</p>
        <div className="flex gap-3">
          <div className="border-2 py-2 px-4 text-teal-400 border-teal-400 content-center font-regular hover:cursor-pointer hover:shadow-indigo-500/40 rounded">
            <a href="https://drive.google.com/file/d/1jWfDGNlKoOsC6RxrWdaXbXi5xRL872eK/view" target='_blank'>Resume</a>
          </div>
          <div className="border-2 py-2 px-4 text-teal-400 border-teal-400 content-center font-regular hover:cursor-pointer rounded">
            <a href="mailto:mayank.09raj@gmail.com">Say Hello!</a>
          </div>
        </div>
      </div>
      <div id="img-content"  className="w-[300px] h-[300px] bg-[#64ffda] rounded hover:-translate-x-1 hover:-translate-y-1 relative ">
        <div className="w-full h-full after:border-2 after:w-full after:h-full after:border-teal-400 after:block after:absolute after:top-3 after:left-3 after:-z-10 hover:after:translate-x-2 hover:after:translate-y-2 after:rounded">
          <img className="w-full h-full object-cover rounded grayscale contrast-100 mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal " src="/Mayank/images/Mayank.jpg"></img>
        </div>
      </div>
    </article>
  )
}

export default Hero