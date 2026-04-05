export default function AboutPage() {
  return (
    <div className='space-y-8 py-12'>
      <div>
        <h1 className='mb-6'>About Me</h1>
        <div className='prose prose-lg max-w-none'>
          <p className='text-lg text-gray-700 leading-relaxed'>
            I'm a psychology student passionate about understanding human behavior and cognition. 
            This portfolio showcases my research interests and projects in various areas of psychology.
          </p>
        </div>
      </div>

      <div>
        <h2 className='mb-6'>Education</h2>
        <div className='space-y-4'>
          <div className='border-l-4 border-primary-600 pl-4'>
            <h3 className='font-semibold'>Bachelor's in Psychology</h3>
            <p className='text-gray-600'>University Name | 2022 - Present</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className='mb-6'>Skills & Interests</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          {['Research Methodology', 'Data Analysis', 'Behavioral Psychology', 'Cognitive Science'].map((skill) => (
            <div key={skill} className='bg-white shadow-neumorphic-sm rounded-lg p-4'>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
