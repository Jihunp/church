import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div id='container' className='container'>
        <Link className='nav last-nav' to="/"><p className='nav-child'>Home</p></Link>
        <Link className='nav' to="/About"><p className='nav-child'>About</p></Link>
        <Link className='nav' to="/Contact"><p className='nav-child'>Contact</p></Link>
        <Link className='nav' to="/Contact"><p className='nav-child'>Tithe</p></Link>
        <Link className='nav' to="/Contact"><p className='nav-child'>Our Belief</p></Link>
      </div>
    </header>
  )
}

export default Navbar