function About() {
  return (
    <article className="flex justify-center font-semibold relative flex-wrap flex-col items-center w-full min-h-screen 
    xl:px-96 lg:px-36 sm:px-20 xsm:px-6 xl:py-0 sd:py-16 xsm:py-8">
      <div id="about-content" className="flex flex-col w-full relative text-left">
        <h1 className="flex items-center font-hero text-neutral-800 msd:text-[2.2rem] xsm:text-[1.6rem] justify-start tracking-tight sd:mb-3 
        xsm:mb-2 before:text-[16px] before:text-lg before:font-medium after:bg-slate-600 after:msd:w-60 after:sm:w-52 
        after:xsm:w-[96px]">About Me</h1>
        <p className="relative sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] pt-4 tracking-tight">Hi, I'm Mayank Raj — Security Defender by Day,
          AI Explorer by Passion. </p>
        <p className="relative sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px] tracking-tight">
          I didn't begin in cybersecurity — I evolved into it.
          From designing intuitive web interfaces to building intelligent ML models, my path has always been led by curiosity and impact.
          An unexpected turn into cybersecurity transformed my journey.
          Today, as a SOC Analyst, I help global organizations stay resilient against DDoS attacks, API abuse,
          SQL injections, and more — turning every log line into insight and action.
          But securing systems means understanding their very foundation.
          That's why I also dive into network operations, traffic flow, and
          infrastructure — architecting security that is proactive, layered, and resilient from the core.
          Still rooted in AI/ML, I believe the future of security lies at the intersection of code and
          cognition — and I'm here to build it.</p>
      </div>
      <ul id="skills-content" className="relative grid tracking-tight xsm:grid-cols-3 lg:grid-cols-4 w-full text-left 
      py-4 sm:px-2 sd:text-[1.3rem] msd:text-[1rem] xsm:text-[13px]">
        <li className="">Threat Detection & Analysis</li>
        <li className="">DDoS Mitigation</li>
        <li className="">SOC Operations</li>
        <li className="">Web Application Firewall(WAF)</li>
        <li className="">API Security</li>
        <li className="">Owasp Top 10</li>
        <li className="">TCP/IP Fundamentals</li>
        <li className="">SSL/TLS</li>
        <li className="">CDN</li>
        <li className="">HTTP/2</li>
        <li className="">Log Monitoring</li>
        <li className="">Python</li>
        <li className="">Java</li>
        <li className="">React Js</li>
        <li className="">Next Js</li>
        <li className="">Tailwind</li>
        <li className="">CSS</li>
        <li className="">MongoDB</li>
        <li className="">MySql</li>
        <li className="">Git</li>
        <li className="">Github</li>
        <li className="">PostMan</li>
        <li className="">Wireshark</li>
        <li className="">BurpSuite</li>
      </ul>
    </article>
  )
}

export default About