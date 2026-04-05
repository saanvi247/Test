export default function ProjectsPage() {
  return (
    <div className='space-y-8 py-12'>
      <div>
        <h1 className='mb-6'>Projects</h1>
        <p className='text-lg text-gray-600'>
          Explore my psychology-related projects and research initiatives.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Project cards will go here */}
        <div className='bg-white shadow-neumorphic rounded-2xl p-6'>
          <h3 className='font-semibold text-lg mb-2'>Project Title</h3>
          <p className='text-gray-600 mb-4'>Project description goes here.</p>
          <div className='flex gap-2 flex-wrap'>
            <span className='text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full'>Tag</span>
          </div>
        </div>
      </div>
    </div>
  )
}
