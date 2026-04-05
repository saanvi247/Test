export default function BlogPage() {
  return (
    <div className='space-y-8 py-12'>
      <div>
        <h1 className='mb-6'>Blog</h1>
        <p className='text-lg text-gray-600'>
          Articles and insights on psychology topics.
        </p>
      </div>

      <div className='space-y-6'>
        {/* Blog posts will go here */}
        <article className='bg-white shadow-neumorphic rounded-2xl p-6 hover:shadow-neumorphic-lg transition-smooth'>
          <h3 className='font-semibold text-lg mb-2'>Blog Post Title</h3>
          <p className='text-gray-500 text-sm mb-3'>Published on January 1, 2024 • 5 min read</p>
          <p className='text-gray-700 mb-4'>Excerpt of the blog post goes here...</p>
          <a href='#' className='text-primary-600 hover:text-primary-700 font-medium'>Read More →</a>
        </article>
      </div>
    </div>
  )
}
