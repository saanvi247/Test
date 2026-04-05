import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <section className='space-y-12'>
      {/* Hero Section */}
      <div className='py-20 text-center'>
        <h1 className='mb-6 bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent'>
          Psychology Portfolio
        </h1>
        <p className='text-xl text-gray-600 max-w-2xl mx-auto mb-8'>
          Welcome to my portfolio. I explore the complexities of human behavior, consciousness, and cognition through research and practical projects.
        </p>
        <Button variant='primary' size='lg'>
          Explore My Work
        </Button>
      </div>

      {/* Featured Projects Preview */}
      <div>
        <h2 className='mb-8'>Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[1, 2, 3].map((i) => (
            <Card key={i} variant='elevated'>
              <div className='bg-gradient-to-br from-primary-100 to-secondary-100 h-40 rounded-lg mb-4'></div>
              <h3 className='font-semibold text-lg mb-2'>Project {i}</h3>
              <p className='text-gray-600 mb-4'>Short description of the project and its impact.</p>
              <Button variant='secondary' size='sm'>
                Learn More
              </Button>
            </Card>
          ))}
        </div>
      </div>

      {/* Research Section */}
      <div>
        <h2 className='mb-8'>Latest Research</h2>
        <Card>
          <div className='space-y-4'>
            {[1, 2].map((i) => (
              <div key={i} className='pb-4 border-b border-gray-100 last:border-b-0 last:pb-0'>
                <h3 className='font-semibold text-lg mb-2'>Research Paper Title {i}</h3>
                <p className='text-gray-600 text-sm mb-3'>A brief description of the research and its findings.</p>
                <Button variant='ghost' size='sm'>
                  Read More →
                </Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
