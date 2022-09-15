import {BiSearchAlt} from 'react-icons/bi'
import {BsBellFill} from 'react-icons/bs'
import {useState, useEffect} from 'react'
import Link from 'next/link'

function Header() {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0){
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
        window.removeEventListener('scroll',handleScroll)
    }
  })
  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
        <div className="flex items-center space-x-2 md:space-x-10 ">
        <picture >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt="logo"
        />
        </picture>

          <ul className="hidden space-x-4 md:flex ">
            <li className="headerLink">Home</li>
            <li className="headerLink">Tv Shows</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & popular</li>
            <li className="headerLink">My List</li>
          </ul>
        </div>
          
        <div className='flex items-center space-x-4 text-sm font-light'>
        <BiSearchAlt className='hidden h-6 w-6 sm:inline' />
        <p className='hidden lg:inline'>Kids </p>
        <BsBellFill className='h-6 w-6'/>
        <Link href='/account'>
        <picture >
        <img
            src="https://occ-0-1190-2774.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
            alt=""
            className="cursor-pointer rounded"
          />
        </picture>
        </Link>

        </div>
    </header>
  )
}

export default Header