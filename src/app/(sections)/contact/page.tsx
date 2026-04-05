export default function ContactPage() {
  return (
    <div className='space-y-8 py-12 max-w-2xl'>
      <div>
        <h1 className='mb-6'>Contact Me</h1>
        <p className='text-lg text-gray-600'>
          Get in touch with me about collaboration opportunities, research inquiries, or just to chat about psychology.
        </p>
      </div>

      <form className='bg-white shadow-neumorphic rounded-2xl p-8 space-y-6'>
        <div>
          <label className='block font-medium mb-2'>Name</label>
          <input
            type='text'
            placeholder='Your name'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
          />
        </div>
        <div>
          <label className='block font-medium mb-2'>Email</label>
          <input
            type='email'
            placeholder='your.email@example.com'
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
          />
        </div>
        <div>
          <label className='block font-medium mb-2'>Message</label>
          <textarea
            placeholder='Your message here...'
            rows={6}
            className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500'
          />
        </div>
        <button
          type='submit'
          className='w-full bg-primary-600 text-white font-medium py-3 rounded-lg hover:bg-primary-700 shadow-neumorphic transition-smooth'
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
