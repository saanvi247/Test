export default function ResearchPage() {
  return (
    <div className='space-y-8 py-12'>
      <div>
        <h1 className='mb-6'>Research</h1>
        <p className='text-lg text-gray-600'>
          Peer-reviewed research and academic publications.
        </p>
      </div>

      <div className='space-y-6'>
        {/* Research papers will go here */}
        <div className='bg-white shadow-neumorphic rounded-2xl p-6 border-l-4 border-primary-600'>
          <h3 className='font-semibold text-lg mb-2'>Research Paper Title</h3>
          <p className='text-gray-600 text-sm mb-2'>Authors | Journal Name (Year)</p>
          <p className='text-gray-700 mb-4'>Abstract or description of the research.</p>
          <a href='#' className='text-primary-600 hover:text-primary-700 font-medium'>Read Full Paper →</a>
        </div>
      </div>
    </div>
  )
}
