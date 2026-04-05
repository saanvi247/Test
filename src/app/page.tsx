import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function Home() {
  return (
    <section className='space-y-24'>
      <section id='home' className='pt-20'>
        <div className='max-w-4xl mx-auto text-center'>
          <p className='text-sm uppercase tracking-[0.35em] text-sky-300'>Professional portfolio</p>
          <h1 className='mt-6 text-5xl md:text-6xl font-semibold tracking-tight text-white'>Designing polished digital experiences with clarity and purpose.</h1>
          <p className='mt-6 text-lg text-slate-300 max-w-3xl mx-auto leading-8'>
            I build strategic portfolio experiences that feel confident, readable, and refined. My work combines research, storytelling, and clean execution to support strong professional impressions.
          </p>
          <div className='mt-10 flex flex-col sm:flex-row justify-center gap-4'>
            <Button variant='primary' size='lg'>View work</Button>
            <Button variant='ghost' size='lg'>Contact me</Button>
          </div>
        </div>
      </section>

      <section id='about' className='max-w-6xl mx-auto grid gap-8 lg:grid-cols-[1.25fr_0.75fr]'>
        <div className='space-y-6'>
          <h2 className='text-3xl font-semibold text-white'>About</h2>
          <p className='text-slate-300 leading-8'>
            I am a psychology researcher and designer with a focus on creating clean, professional portfolio experiences. My work is grounded in human-centred thinking and clear visual communication.
          </p>
          <p className='text-slate-300 leading-8'>
            I enjoy translating complex ideas into approachable presentations that reinforce trust and credibility.
          </p>
        </div>
        <Card>
          <div className='space-y-4'>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-sky-300'>Location</p>
              <p className='mt-2 text-white'>Eindhoven, Netherlands</p>
            </div>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-sky-300'>Role</p>
              <p className='mt-2 text-white'>Design Researcher & Portfolio Specialist</p>
            </div>
            <div>
              <p className='text-sm uppercase tracking-[0.3em] text-sky-300'>Focus</p>
              <p className='mt-2 text-white'>Research, UX design, digital storytelling</p>
            </div>
          </div>
        </Card>
      </section>

      <section id='experience' className='max-w-6xl mx-auto space-y-8'>
        <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <h2 className='text-3xl font-semibold text-white'>Experience</h2>
            <p className='text-slate-400 max-w-2xl'>A selection of recent roles and professional milestones.</p>
          </div>
        </div>
        <div className='grid gap-6 lg:grid-cols-2'>
          {[
            {
              title: 'Design Engineer',
              company: '35®',
              description: 'Led design systems and product thinking for user-focused interfaces.',
            },
            {
              title: 'Master of Industrial Design',
              company: 'Eindhoven University of Technology',
              description: 'Developed research-led design solutions for digital and physical experiences.',
            },
          ].map((item) => (
            <Card key={item.title} variant='elevated'>
              <p className='text-sm uppercase tracking-[0.3em] text-sky-300'>{item.company}</p>
              <h3 className='mt-4 text-2xl font-semibold text-white'>{item.title}</h3>
              <p className='mt-3 text-slate-300 leading-7'>{item.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id='skills' className='max-w-6xl mx-auto space-y-8'>
        <div>
          <h2 className='text-3xl font-semibold text-white'>Skills</h2>
          <p className='text-slate-400 max-w-2xl'>Tools and disciplines I use to create thoughtful work.</p>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            { label: 'Frontend', value: 'Vue, Astro, JavaScript, HTML, CSS' },
            { label: 'Backend', value: 'Python, Django, PostgreSQL, TypeScript' },
            { label: 'Research', value: 'User testing, qualitative insights, prototyping' },
          ].map((item) => (
            <Card key={item.label}>
              <p className='text-sm uppercase tracking-[0.25em] text-sky-300'>{item.label}</p>
              <p className='mt-4 text-slate-200 leading-7'>{item.value}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id='contact' className='max-w-6xl mx-auto'>
        <Card className='bg-slate-900/90 border-slate-700'>
          <div className='flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'>
            <div>
              <p className='text-sky-300 uppercase tracking-[0.3em] text-sm'>Contact</p>
              <h2 className='mt-4 text-3xl font-semibold text-white'>Let’s build something professional together.</h2>
            </div>
            <Button variant='primary' size='lg'>Get in touch</Button>
          </div>
        </Card>
      </section>
    </section>
  )
}
