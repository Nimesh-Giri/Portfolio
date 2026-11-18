
function About() {
  return (
    <section id="about" className="border-t border-[#dedfd8] py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">

        {/* Section heading */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#7c8d67]">
            A little about me
          </p>

          <h2 className="text-4xl font-medium tracking-tight text-[#20231f] sm:text-5xl">
            Beyond the
            <br />
            screen.
          </h2>
        </div>

        {/* Introduction */}
        <div>
          <p className="text-xl leading-relaxed text-[#454940]">
            I'm Nimesh, a Software Engineering student at Pokhara University
            with a growing interest in building useful software and
            understanding the technology behind it.
          </p>

          <p className="mt-6 text-base leading-8 text-[#73766f]">
            I'm particularly interested in software development,
            artificial intelligence, and machine learning. I enjoy
            exploring how things work, experimenting with new ideas,
            and turning what I learn into practical projects.
          </p>

          <p className="mt-6 text-base leading-8 text-[#73766f]">
            I believe in learning by building. Rather than just
            collecting technologies, I want to understand the
            fundamentals and use them to solve real problems.
          </p>

          {/* Personal details */}
          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#dedfd8] pt-8">
            <div>
              <p className="text-sm text-[#92958c]">Education</p>
              <p className="mt-2 font-medium text-[#20231f]">
                Software Engineering
              </p>
            </div>

            <div>
              <p className="text-sm text-[#92958c]">Based in</p>
              <p className="mt-2 font-medium text-[#20231f]">
                Pokhara, Nepal
              </p>
            </div>

            <div>
              <p className="text-sm text-[#92958c]">Interests</p>
              <p className="mt-2 font-medium text-[#20231f]">
                AI · Software · Technology
              </p>
            </div>

            <div>
              <p className="text-sm text-[#92958c]">Approach</p>
              <p className="mt-2 font-medium text-[#20231f]">
                Learn by building
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
