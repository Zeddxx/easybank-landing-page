import React,{useState}  from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'
import HamburgerBtn from './HamburgerBtn'

const Navbar = () => {
    
    const menuLists = [
        {
            "name" : "Home",
            "url" : "/home",
            "id" : "home",
        },
        {
            "name" : "About",
            "url" : "/about",
            "id" : "about"
        },
        {
            "name" : "Contact",
            "url" : "/contact",
            "id" : "contact"
        },
        {
            "name" : "Blog",
            "url" : "/blog",
            "id" : "blog"
        },
        {
            "name" : "Careers",
            "url" : "/careers",
            "id" : "careers"
        }
    ]

    const [isActive, setIsActive] = useState(false);

    return (
    <nav className='navbar'>
        <div className="main-nav">
            <div className="logo"><img src={Logo} alt="Easy Bank logo" /></div>
            <div className={`lists ${isActive ? 'shows' : ''}`}>
                {menuLists.map((item) => (
                    <NavLink
                    key={item.id}
                    to={item.url}
                    className={({isActive}) => {
                        return (isActive ? 'active' : '')
                    }}>{item.name}</NavLink>
                ))}
            </div>
            <button className="request-btn">Request Invite</button>
            <HamburgerBtn 
            isActive = {isActive}
            setIsActive = {setIsActive}
            />
        </div>
    </nav>
  )
}

export default Navbar
