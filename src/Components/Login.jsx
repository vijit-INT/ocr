import React, { useEffect } from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterAction } from '../Redux/RegisterSlice'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import styles from './Navbar.module.css'
import HeroSlider from './HeroSlider'

const Login = () => {
  const navigate = useNavigate();
  const registerData = useSelector((state) => state.register.registerData)
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.register.auth)
  console.log("Auth", auth)
  localStorage.setItem('status', JSON.stringify(auth))
  console.log( JSON.parse(localStorage.getItem('status')))
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

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem('status'));
    const arr = JSON.parse(localStorage.getItem('userRegisterArray'));
    if (registerData[0] === undefined) {
      dispatch(RegisterAction.createRegister(arr));
      dispatch(RegisterAction.updateAuth(status));
    } else {
      localStorage.setItem('status', JSON.stringify(auth))
      localStorage.setItem("userRegisterArray", JSON.stringify(registerData))
    }
  }, [registerData]);

  // useEffect(()=> {
  //   if(registerData[0] === undefined){

  //   } else{

  //   }
  // },[])

  const status = JSON.parse(localStorage.getItem('status'))
  console.log(auth, status)

  const initialValues = {
    email: '',
    password: ''
  }
  const onSubmit = (values, action) => {
    const arr = registerData.filter(item => item.Email === values.email && item.Password === values.password);
    if (arr[0] !== undefined) {
      Swal.fire({
        // position: 'top-end',
        icon: 'success',
        title: 'Your logged in',
        showConfirmButton: false,
        timer: 1500
      })
      dispatch(RegisterAction.updateAuth(true));

      navigate('/userList')

    } else {
      Swal.fire({
        // position: 'top-end',
        icon: 'error',
        title: 'Your Email or passord might be wrong',
        showConfirmButton: false,
        timer: 1500
      })
    }
    action.resetForm()
  }
  return (

    <div className={styles.loginForm}>
      <HeroSlider />
      <h1>Login</h1>
      {!auth && <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >

        <Form>
          <br />
          <br />
          <Field
            type='email'
            name='email'
            placeholder='Enter email address'
            autoComplete='off'
            className={styles.registerFeild}

          />
          <br />
          <Field
            type='password'
            name='password'
            placeholder='Enter password'
            autoComplete='off'
            className={styles.registerFeild}

          />
          <br />
          <button type='submit' className={styles.button}>Login</button>
        </Form>
      </Formik>}
    </div>


  )
}

export default Login