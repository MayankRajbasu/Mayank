function Project() {
  return (
    <article className="flex justify-center gap-4 relative flex-wrap flex-col items-center w-full min-h-screen xl:px-36 xl:py-0 sd:py-16 xsm:py-24">
      <div id="project-content" className="flex flex-col w-full sm:mt-7 xsm:mt-2 relative">
        <h1 className="font-regular text-2xl flex font-semibold text-slate-300 text-start mb-3 before:text-lg before:font-medium after:bg-slate-600 after:msd:w-60 after:sm:w-40 after:xsm:w-[48px]">What I've built</h1>
        <div id="cards" className="mt-6">

        </div>
      </div>
    </article>
  )
}

export default Project