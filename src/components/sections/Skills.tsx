type Skill = {
  name: string
  icon: string
}

type SkillCategory = {
  category: string
  skills: Skill[]
}

const skillsData: SkillCategory[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React',      icon: '⚛️' },
      { name: 'TypeScript', icon: '🔷' },
      { name: 'Three.js',   icon: '🎯' },
      { name: 'HTML / CSS', icon: '🌐' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js',  icon: '🟢' },
      { name: 'Bun.js',   icon: '🐢' },
      { name: 'Hono.js',  icon: '🔥' },
      { name: 'Python',   icon: '🐍' },
      { name: 'MongoDB',  icon: '🍃' },
      { name: 'MySQL',    icon: '🐬' },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Docker',     icon: '🐳' },
      { name: 'Git/GitHub', icon: '🐙' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 px-4 py-16 sm:px-6 md:px-12 lg:px-20">

      {/* Section heading */}
      <div className="mx-auto mb-10 max-w-6xl sm:mb-12">
        <p className="text-slate-400 text-sm mb-1">What I work with</p>
        <h2 className="text-3xl font-bold text-slate-800">Skills</h2>
      </div>

      {/* Categories */}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:gap-10">
        {skillsData.map((group) => (
          <div key={group.category}>

            {/* Category label */}
            <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 mb-4">
              {group.category}
            </p>

            {/* Skills grid */}
            <div className="grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white px-4 py-3 transition-all duration-200 hover:border-slate-300 hover:shadow-sm"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}
