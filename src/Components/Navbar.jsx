import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Navbar.module.css'

const Navbar = () => {
    const auth = useSelector((state) => state.register.auth)
  return (
    <div className={styles.navbarmaindiv}>
      <div className={styles.NavBarSub1}>
       <img id={styles.Navimg} src='https://cdn.pixabay.com/photo/2016/12/26/18/33/logo-1932539__340.png'/>
      </div>
     
      <div className={styles.NavBarSub2}>
      { auth ? <Link to='/Logout' className={styles.navbarlinks}>Logout</Link> : <Link to='/login'  className={styles.navbarlinks}>Login</Link>}
      <Link to='/'  className={styles.navbarlinks}>SignUp</Link>
      <Link to='/userList'  className={styles.navbarlinks}>UserList</Link>
      <Link to='/scanner' className={styles.navbarlinks}>Scanner</Link>
      </div>
     
     
    
    </div>
  )
}

export default Navbar