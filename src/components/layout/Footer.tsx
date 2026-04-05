export default function Footer() {
  return (
    <footer className='bg-white border-t border-gray-100 mt-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          <div>
            <h3 className='font-bold text-lg text-primary-600 mb-4'>Portfolio</h3>
            <p className='text-gray-600'>A psychology student exploring research and projects in human behavior.</p>
          </div>
          <div>
            <h4 className='font-semibold text-gray-900 mb-4'>Quick Links</h4>
            <ul className='space-y-2 text-gray-600'>
              <li><a href='#' className='hover:text-primary-600 transition-smooth'>About</a></li>
              <li><a href='#' className='hover:text-primary-600 transition-smooth'>Research</a></li>
              <li><a href='#' className='hover:text-primary-600 transition-smooth'>Projects</a></li>
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-gray-900 mb-4'>Connect</h4>
            <ul className='space-y-2 text-gray-600'>
              <li><a href='#' className='hover:text-primary-600 transition-smooth'>Twitter</a></li>
              <li><a href='#' className='hover:text-primary-600 transition-smooth'>LinkedIn</a></li>
              <li><a href='#' className='hover:text-primary-600 transition-smooth'>Email</a></li>
            </ul>
          </div>
        </div>
        <div className='border-t border-gray-100 pt-8 text-center text-gray-600'>
          <p>&copy; 2024 Psychology Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
