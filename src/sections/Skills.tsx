const skillGroups = [
  {
    number: '01',
    title: 'Programming',
    description: 'Languages and programming fundamentals.',
    skills: ['Python', 'JavaScript', 'TypeScript'],
  },
  {
    number: '02',
    title: 'Development',
    description: 'Technologies used to build software and websites.',
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
  },
  {
    number: '03',
    title: 'Tools & Interests',
    // Fixed: escaped the apostrophe with \'
    description: 'Tools and areas I\'m exploring through practical work.',
    skills: ['Git', 'GitHub', 'Linux', 'Manim', 'AI / ML'],
  },
]

function Skills() {
  return (
    <section id="skills" className="border-t border-[#dedfd8] py-28">
      {/* Heading */}
      <div className="mb-16">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-[#7c8d67]">
          My toolkit
        </p>

        <h2 className="text-4xl font-medium tracking-tight text-[#20231f] sm:text-5xl">
          Technologies I work
          <br />
          and experiment with.
        </h2>

        <p className="mt-6 max-w-lg text-base leading-7 text-[#73766f]">
          A growing collection of languages, tools, and technologies
          I'm using while learning and building projects.
        </p>
      </div>

      {/* Skill groups */}
      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.number}
            className="rounded-xl border border-[#dedfd8] p-7 transition-colors hover:border-[#a8b397]"
          >
            <p className="text-sm text-[#a0a197]">
              / {group.number}
            </p>

            <h3 className="mt-8 text-xl font-medium text-[#20231f]">
              {group.title}
            </h3>

            <p className="mt-3 min-h-12 text-sm leading-6 text-[#73766f]">
              {group.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#dedfd8] px-3 py-2 text-sm text-[#454940]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills