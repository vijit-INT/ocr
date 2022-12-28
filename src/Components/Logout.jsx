import React,{useEffect} from 'react'
import { RegisterAction } from '../Redux/RegisterSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import Swal from 'sweetalert2'
import HeroSlider from './HeroSlider'

const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.register.auth)
    const registerData = useSelector((state) => state.register.registerData);
    let arr = [{
      id: "24631317-105c-4e03-a464-2add09e0a26a",
      Name: 'vijit',
      Address: 'Devgarh',
      Phone: '7905597148',
      Email: 'vijit@gmail.com',
      Password: '123'
    }]
    const lolStatus = localStorage.getItem('status');
    const lolData = localStorage.getItem('userRegisterArray');
    if (lolStatus && lolData === null) {
      localStorage.setItem('status', JSON.stringify(false))
      localStorage.setItem('userRegisterArray', JSON.stringify(arr))
    } else if (lolStatus === null) {
      localStorage.setItem('status', JSON.stringify(false))
    } else if (lolData === null) {
      localStorage.setItem('userRegisterArray', JSON.stringify(arr))
    }
    
    useEffect(()=> {
      const status= JSON.parse(localStorage.getItem('status'));
      const arr=JSON.parse(localStorage.getItem('userRegisterArray'))
      if(registerData[0] === undefined){
        dispatch(RegisterAction.createRegister(arr))
        dispatch(RegisterAction.updateAuth(status))
      } else{ 
      localStorage.setItem("userRegisterArray", JSON.stringify(registerData))
      localStorage.getItem('status', JSON.stringify(auth));
      }

    },[auth])
    if(!auth){
      navigate('/login')
    }
    const authHandler = () =>{
     dispatch(RegisterAction.updateAuth(false));
     Swal.fire({
      icon: 'success',
      title: 'You logged out successfully',
      confirmButtonText: 'OK',
      allowOutsideClick: false
    })
     navigate('/login')
    }
  return (
    <div className={styles.logoutMainDiv}>
      <HeroSlider />
      <h1>Click for Logout!</h1>
        { auth &&  
        <button onClick={authHandler} className={styles.button}>Logout</button>
        }
    </div>
  )
}

export default Logout