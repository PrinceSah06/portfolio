import { projects } from '../../constants/projects'

export default function Projects() {
  return (
    <section id="projects" className= "relative z-10 py-20 px-6 md:px-20 bg-slate-950/80">

      {/* Section heading */}
      <div className="mx-auto mb-10 max-w-6xl sm:mb-12">
        <p className="text-slate-400 text-sm mb-1">Things I have built</p>
        <h2 className="text-3xl font-bold text-slate-50">Projects</h2>
      </div>

      {/* Projects grid */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col justify-between gap-4 rounded-lg  border border-slate-800 bg-slate-900/60 p-6 transition-all duration-200 hover:border-slate-600 hover:bg-slate-900"
          >

            {/* Top — title + description */}
            <div>
              <h3 className="mb-2 text-base font-semibold text-slate-100 sm:text-lg">
                {project.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Bottom — tech tags + github link */}
            <div className="flex flex-col gap-3">

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-slate-400 bg-slate-800 border border-slate-700 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-200 transition-colors w-fit"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View on GitHub
              </a>

            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
