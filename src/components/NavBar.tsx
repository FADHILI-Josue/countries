import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full bg-white dark:bg-gray-700 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between'>
          <Link
            href='/'
            className='flex z-40 font-bold'>
            <span>Where in the world?</span>
          </Link>

          <ThemeToggle />
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}
export default Navbar
