import Link from 'next/link';

const About = () => (
  <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
    {/* Breadcrumb */}
    <nav className='flex gap-2 py-4 lg:p-0'>
      <Link href='/'>Home</Link>
      <span>/</span>
      <span>About</span>
    </nav>
    <p className='m-0 max-w-[30ch] text-sm opacity-50'>
      Welcome to my about page!
    </p>
  </div>
);

export default About;
