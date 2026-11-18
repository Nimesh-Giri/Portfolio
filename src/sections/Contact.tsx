
function Contact() {
  return (
    <section id="contact" className="border-t border-[#dedfd8] py-28">
      <p className="mb-5 text-sm font-medium uppercase tracking-widest text-[#7c8d67]">
        Get in touch
      </p>

      <div className="grid gap-12 md:grid-cols-[1.5fr_1fr] md:items-end">
        <div>
          <h2 className="max-w-3xl text-5xl leading-tight font-medium tracking-tight text-[#20231f] sm:text-6xl md:text-7xl">
            Have an idea?
            <br />
            <span className="text-[#7c8d67]">Let's connect.</span>
          </h2>

          <p className="mt-8 max-w-lg text-lg leading-8 text-[#73766f]">
            I'm always interested in connecting with people,
            discussing ideas, learning from others, and exploring
            opportunities to build something meaningful.
          </p>

          <a
            href="mailto:nimeshgiri871@gmail.com"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#20231f] px-7 py-4 text-sm font-medium text-white transition-transform hover:-translate-y-1"
          >
            Say hello
            <span>↗</span>
          </a>
        </div>

        <div className="border-t border-[#dedfd8] pt-8 md:border-t-0 md:pt-0">
          <p className="mb-6 text-sm text-[#92958c]">
            Find me online
          </p>

          <div className="flex flex-col gap-5">
            <a
              href="https://github.com/Nimesh-Giri"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between border-b border-[#dedfd8] pb-4 text-[#20231f] transition-colors hover:text-[#7c8d67]"
            >
              GitHub <span>↗</span>
            </a>

            <a
              href="mailto:nimeshgiri871@gmail.com"
              className="flex items-center justify-between border-b border-[#dedfd8] pb-4 text-[#20231f] transition-colors hover:text-[#7c8d67]"
            >
              Email <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
