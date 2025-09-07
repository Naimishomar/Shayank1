import React,{useState, useEffect} from 'react'
import Header from './Header'
import { Outlet} from 'react-router-dom';
import Footer from './Footer';

function Layout() {
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY >= 80);
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <div className='bg-white text-black'>
        <Header isScrolled={isScrolled}/>
        <div className='py-20'>
            <Outlet context={{isScrolled}}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Layout