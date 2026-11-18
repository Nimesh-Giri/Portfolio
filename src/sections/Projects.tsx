
const projects = [
  {
    number: '01',
    title: 'NEPSE Pre-breakout Scanner',
    category: 'Quantitative Research',
    description:
      'Exploring quantitative methods to identify potential breakout opportunities in Nepal’s stock market using historical price, volume, and technical data.',
    technologies: ['Python', 'Pandas', 'Data Analysis'],
    status: 'Research in progress',
  },
  {
    number: '02',
    title: 'AI Educational Reels',
    category: 'Creative Technology',
    description:
      'Experimenting with mathematical and technical animations to make complex concepts easier to understand through short educational videos.',
    technologies: ['Python', 'Manim', 'Video Production'],
    status: 'Experimenting',
  },
  {
    number: '03',
    title: 'Python Learning Projects',
    category: 'Software Development',
    description:
      'Building small practical projects and exercises while developing a stronger foundation in Python, programming concepts, and problem solving.',
    technologies: ['Python', 'OOP', 'Git'],
    status: 'Ongoing',
  },
]

function Projects() {
  return (
    <section id="projects" className="border-t border-[#dedfd8] py-28">
      {/* Heading */}
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#7c8d67]">
            Selected work
          </p>

          <h2 className="text-4xl font-medium tracking-tight text-[#20231f] sm:text-5xl">
            Things I've been
            <br />
            working on.
          </h2>
        </div>

        <p className="max-w-sm text-base leading-7 text-[#73766f]">
          A collection of projects, experiments, and ideas I'm
          exploring while learning and building.
        </p>
      </div>

      {/* Project cards */}
      <div className="divide-y divide-[#dedfd8]">
        {projects.map((project) => (
          <article
            key={project.number}
            className="group grid gap-6 py-10 transition-colors md:grid-cols-[70px_1fr_1fr] md:gap-10"
          >
            <span className="text-sm text-[#a0a197]">
              / {project.number}
            </span>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#7c8d67]">
                {project.category}
              </p>

              <h3 className="text-2xl font-medium tracking-tight text-[#20231f] transition-colors group-hover:text-[#7c8d67]">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-[#92958c]">
                {project.status}
              </p>
            </div>

            <div>
              <p className="text-base leading-7 text-[#73766f]">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[#dedfd8] px-3 py-1.5 text-xs text-[#62665d]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
