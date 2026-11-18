const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Contact', href: '#contact' },
  { label: 'Skills', href: '#skills' },
]

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <a href="#" className="text-lg font-semibold tracking-tight text-[#20231f]">
        Nimesh<span className="text-[#7c8d67]">.</span>
      </a>

      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm text-[#73766f] transition-colors hover:text-[#20231f]"
          >
            {link.label}
          </a>
        ))}
      </div>

      <a
        href="#contact"
        className="rounded-full border border-[#dedfd8] px-4 py-2 text-sm text-[#20231f] transition-all hover:border-[#7c8d67] hover:bg-[#7c8d67] hover:text-white"
      >
        Let's talk ↗
      </a>
    </nav>
  )
}

export default Navbar