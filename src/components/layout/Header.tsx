export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800'>
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
        <div className='text-2xl font-semibold text-white'>Portfolio</div>
        <ul className='hidden md:flex gap-8 items-center'>
          <li><a href='#home' className='text-slate-200 hover:text-sky-300 transition-smooth'>Home</a></li>
          <li><a href='#about' className='text-slate-200 hover:text-sky-300 transition-smooth'>About</a></li>
          <li><a href='#experience' className='text-slate-200 hover:text-sky-300 transition-smooth'>Experience</a></li>
          <li><a href='#skills' className='text-slate-200 hover:text-sky-300 transition-smooth'>Skills</a></li>
          <li><a href='#contact' className='text-slate-200 hover:text-sky-300 transition-smooth'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
