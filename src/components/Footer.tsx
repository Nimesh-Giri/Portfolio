function Footer() {
  return (
    <footer className="border-t border-[#dedfd8] py-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight text-[#20231f]"
        >
          Nimesh<span className="text-[#7c8d67]">.</span>
        </a>

        <p className="text-sm text-[#92958c]">
          Designed & built with curiosity.
        </p>

        <p className="text-sm text-[#92958c]">
          © {new Date().getFullYear()} Nimesh
        </p>
      </div>
    </footer>
  )
}

export default Footer