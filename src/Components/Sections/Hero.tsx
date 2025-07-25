function Hero() {
  return (
    <article className="flex flex-col justify-center items-center relative w-full min-h-screen ">
      <div id="content" className="h-full text-center flex flex-col gap-3 items-center">
        <p className="font-hero font-semibold text-neutral-800 text-[3rem] py-2">Hi, I'm Mayank</p>
        <div id="img-content" className=" sd:w-[300px] xsm:w-[240px] bg-[#FAEFCC] rounded hover:-translate-x-1 hover:-translate-y-1 relative ">
          <div className="w-full h-full after:border-2 after:w-full after:h-full after:border-[#FFBE42] after:block after:absolute after:top-3 after:left-3 after:-z-10 hover:after:translate-x-2 hover:after:translate-y-2 after:rounded">
            <img className="w-full h-full object-cover rounded grayscale contrast-100 mix-blend-multiply hover:grayscale-0 hover:mix-blend-normal " src="/Mayank/images/Mayank.jpg"></img>
          </div>
        </div>
        <p className="pt-4 text-[1.6rem] font-bold">A soc analyst in Chennai.</p>
      </div>
    </article>
  )
}

export default Hero