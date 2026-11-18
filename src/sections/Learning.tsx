
const learningAreas = [
  {
    number: '01',
    title: 'AI & Machine Learning',
    description:
      'Exploring machine learning fundamentals, neural networks, and how intelligent systems learn from data.',
    focus: ['Machine Learning', 'Neural Networks', 'AI Fundamentals'],
  },
  {
    number: '02',
    title: 'Software Engineering',
    description:
      'Strengthening programming fundamentals, problem-solving skills, and learning how to build reliable software.',
    focus: ['Python', 'Data Structures', 'Software Development'],
  },
  {
    number: '03',
    title: 'Visual Learning & Communication',
    description:
      'Experimenting with animations and visual explanations to make complex technical ideas easier to understand.',
    focus: ['Manim', 'Technical Animation', 'Content Creation'],
  },
]

function Learning() {
  return (
    <section id="learning" className="border-t border-[#dedfd8] py-28">
      <div className="grid gap-12 md:grid-cols-[1fr_1.5fr]">

        {/* Heading */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#7c8d67]">
            Always learning
          </p>

          <h2 className="text-4xl font-medium tracking-tight text-[#20231f] sm:text-5xl">
            Currently
            <br />
            exploring.
          </h2>

          <p className="mt-6 max-w-sm text-base leading-7 text-[#73766f]">
            Technology keeps evolving, and so do my interests.
            These are some of the areas I'm spending time
            understanding and experimenting with.
          </p>
        </div>

        {/* Learning areas */}
        <div className="divide-y divide-[#dedfd8]">
          {learningAreas.map((area) => (
            <article key={area.number} className="py-8 first:pt-0">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#a0a197]">
                  / {area.number}
                </span>

                <span className="text-xs uppercase tracking-wider text-[#7c8d67]">
                  Exploring
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-medium tracking-tight text-[#20231f]">
                {area.title}
              </h3>

              <p className="mt-3 max-w-xl text-base leading-7 text-[#73766f]">
                {area.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {area.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#dedfd8] px-3 py-1.5 text-xs text-[#62665d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learning
