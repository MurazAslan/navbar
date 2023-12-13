import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import style from './layout.module.css'

const Layout = () => {
  return (
    <>
      <ul style={{listStyle:'none'}}>
        <li className={style.homeLi}>
          <Link to={'/'}>Home</Link>
          </li>
        <li>
          
        <Link to={'/products'}>Products</Link>
        </li>
        <li>
          
        <Link to={'/services'}>Services</Link>
        </li>
        <li>
          
        <Link to={'/Contact'}>Contact</Link>
        </li>
      </ul>
        
        <Outlet />
      
    </>
  )
}

export default Layout
