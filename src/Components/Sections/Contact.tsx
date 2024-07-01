function Contact() {
  return (
    <article className="flex justify-between gap-4 relative flex-wrap flex-col items-center w-full min-h-screen xl:px-36 xsm:pt-44 sd:pb-8 xsm:pb-4">
      <div id="contact-content" className="flex flex-col items-center w-full sm:mt-7 xsm:mt-2 relative">
        <h1 className="font-regular sd:text-[22px] xsm:text-[16px] flex font-medium text-teal-400 mb-3 before:sd:text-lg  before:font-medium after:bg-slate-600">What's next?</h1>
        <p className="font-hero text-slate-300/75 xl:text-[52px] sd:text-[48px] xsm:text-[36px] font-bold tracking-wide">Get In Touch</p>
        <p className="font-regular xl:px-72 mb-6 pb-3 text-center">I'm currently open for any new opportunities in field of Fullstack and Machine learning developement. Whether you have any querry or just wanna say hi, my inbox is open. I'll try my best to get back to you! </p>
        <div className="border-2 py-2 px-4 text-teal-400 border-teal-400 content-center font-regular hover:cursor-pointer rounded">
          <a href="mailto:mayank.09raj@gmail.com">Say Hello!</a>
        </div>
      </div>
      <div id="footer" className="mt-6">
        <div className="flex text-slate-300 justify-center gap-4">
          <a href="https://github.com/MayankRajbasu"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="feather feather-github hover:-translate-x-1 hover:-translate-y-1"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.instagram.com/m_krajbasu/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram hover:-translate-x-1 hover:-translate-y-1" >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z">
            </path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="https://www.linkedin.com/in/mayankrajbasu/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" className="feather feather-linkedin hover:-translate-x-1 hover:-translate-y-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
            </path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:mayank.09raj@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail hover:-translate-x-1 hover:-translate-y-1">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
        <p className="text-center font-regular text-base flex gap-1 py-4 items-center relative"><span className="text-teal-400 py-2 mt-1 relative">&copy;</span>2024 Develped by Mayank Raj</p>
      </div>
    </article>
  )
}

export default Contact