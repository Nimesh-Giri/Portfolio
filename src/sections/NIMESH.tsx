function Hero() {
  return (
    <section className="flex min-h-[75vh] flex-col justify-center py-20">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#7c8d67]" />
        <p className="text-sm tracking-wide text-[#73766f]">
          Software Engineering Student · Exploring AI
        </p>
      </div>

      <h1 className="max-w-4xl text-5xl leading-[1.1] font-medium tracking-tight text-[#20231f] sm:text-6xl md:text-7xl lg:text-8xl">
        Building things,
        <br />
        <span className="text-[#7c8d67]">learning along</span>
        <br />
        the way.
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-[#73766f]">
        I'm Nimesh, a software engineering student interested in software
        development, AI, and turning ideas into things that actually work.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="rounded-full bg-[#20231f] px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
        >
          Explore my work ↗
        </a>

        <a
          href="#about"
          className="rounded-full border border-[#dedfd8] px-6 py-3 text-sm font-medium text-[#20231f] transition-colors hover:bg-[#eeefe9]"
        >
          More about me
        </a>
      </div>

      <div className="mt-20 flex flex-col gap-3 border-t border-[#dedfd8] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#73766f]">
          Pokhara, Nepal
        </p>

        <p className="text-sm text-[#73766f]">
          Currently learning · Building · Exploring
        </p>
      </div>
    </section>
  )
}

export default Hero