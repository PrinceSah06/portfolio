const contactLinks = [
  {
    label: 'Email',
    value: 'princesah@gmail.com', // replace with your real email
    href: 'mailto:princesah@gmail.com',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/PrinceSah06',
    href: 'https://github.com/PrinceSah06',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/princesah', // replace with your real LinkedIn
    href: 'https://www.linkedin.com/in/prince-sah-dev/',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-slate-50 px-4 py-16 sm:px-6 md:px-12 lg:px-20">

      {/* Section heading */}
      <div className="mx-auto mb-10 max-w-6xl sm:mb-12">
        <p className="text-slate-400 text-sm mb-1">Get in touch</p>
        <h2 className="text-3xl font-bold text-slate-800">Contact</h2>
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="max-w-lg">

          {/* Short message */}
          <p className="mb-8 text-sm leading-relaxed text-slate-500 sm:mb-10 sm:text-base">
            I am currently looking for my first developer role. If you have an
            opportunity or just want to say hi, feel free to reach out — I will
            get back to you as soon as possible.
          </p>

          {/* Links */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all duration-200 hover:border-slate-300 hover:shadow-sm sm:w-fit sm:min-w-[320px]"
              >
                {/* Icon box */}
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-all duration-200 group-hover:border-slate-400 group-hover:text-slate-800">
                  {link.icon}
                </div>

                {/* Label + value */}
                <div className="min-w-0">
                  <p className="mb-0.5 text-xs leading-none text-slate-400">
                    {link.label}
                  </p>
                  <p className="truncate text-sm font-medium text-slate-700 transition-colors group-hover:text-slate-900">
                    {link.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="mx-auto mt-16 max-w-6xl border-t border-slate-200 pt-8 sm:mt-20">
        <p className="text-xs text-slate-400">
          Built by Prince Sah · {new Date().getFullYear()}
        </p>
      </div>

    </section>
  )
}
