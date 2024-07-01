function Project() {
  return (
    <article className="flex justify-center gap-4 relative flex-wrap flex-col items-center w-full min-h-screen xl:px-36 xl:py-0 sd:py-16 xsm:pb-8 xsm:pt-16">
      <div id="project-content" className="flex flex-col w-full sm:mt-7 xsm:mt-2 relative">
        <h1 className="font-regular sm:text-2xl xsm:text-[22px] flex font-semibold text-slate-300 text-start sd:mb-3 before:text-lg before:font-medium after:bg-slate-600 after:msd:w-60 after:sm:w-40 after:xsm:w-[32px]">What I've built</h1>
        <div id="card-container" className="grid gap-x-4 relative my-2">
          <div id="cards" className="mt-6 h-full relative hover:-translate-x-1 hover:-translate-y-1">
          kumar
          </div>
          <div id="cards" className="mt-6 h-full relative hover:-translate-x-1 hover:-translate-y-1" >
            hello
          </div>
          <div id="cards" className="mt-6 h-full relative hover:-translate-x-1 hover:-translate-y-1" >
            hello
          </div>
        </div>
        <a className="font-regular text-teal-400 w-full pt-6 text-center" href="https://github.com/MayankRajbasu?tab=repositories">See more..</a>
      </div>
    </article>
  )
}

export default Project