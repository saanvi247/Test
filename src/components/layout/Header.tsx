export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-neumorphic-sm'>
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
        <div className='text-2xl font-bold text-primary-600'>Portfolio</div>
        <ul className='hidden md:flex gap-8 items-center'>
          <li><a href='#' className='text-gray-700 hover:text-primary-600 transition-smooth'>Home</a></li>
          <li><a href='#' className='text-gray-700 hover:text-primary-600 transition-smooth'>About</a></li>
          <li><a href='#' className='text-gray-700 hover:text-primary-600 transition-smooth'>Research</a></li>
          <li><a href='#' className='text-gray-700 hover:text-primary-600 transition-smooth'>Projects</a></li>
          <li><a href='#' className='text-gray-700 hover:text-primary-600 transition-smooth'>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}
