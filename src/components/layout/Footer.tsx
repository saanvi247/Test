export default function Footer() {
  return (
    <footer className='bg-slate-950/95 border-t border-slate-800 mt-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='font-bold text-lg text-sky-300 mb-4'>Portfolio</h3>
            <p className='text-slate-400'>A thoughtful portfolio focused on professional design, research, and product story.</p>
          </div>
          <div>
            <h4 className='font-semibold text-slate-100 mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-slate-400'>
              <li><a href='#about' className='hover:text-sky-300 transition-smooth'>About</a></li>
              <li><a href='#experience' className='hover:text-sky-300 transition-smooth'>Experience</a></li>
              <li><a href='#skills' className='hover:text-sky-300 transition-smooth'>Skills</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-slate-100 mb-4'>Connect</h4>
            <ul className='space-y-2 text-slate-400'>
              <li><a href='#contact' className='hover:text-sky-300 transition-smooth'>Contact</a></li>
              <li><a href='#' className='hover:text-sky-300 transition-smooth'>LinkedIn</a></li>
              <li><a href='#' className='hover:text-sky-300 transition-smooth'>Email</a></li>
            </ul>
          </div>
        </div>
        <div className='border-t border-slate-800 pt-8 text-center text-slate-500'>
          <p>&copy; 2024 Psychology Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
