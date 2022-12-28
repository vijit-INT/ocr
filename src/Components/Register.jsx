import React, { useEffect } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { RegisterAction } from '../Redux/RegisterSlice'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as uuid} from 'uuid'
import styles from './Navbar.module.css'
import * as Yup from 'yup'
import TextError from './TextError'
import Swal from 'sweetalert2'
import HeroSlider from './HeroSlider'


const Register = () => {
  
  const dispatch = useDispatch();
  const registerData = useSelector((state) => state.register.registerData);
  const auth = useSelector((state) => state.register.auth);
    
    useEffect(()=>{
      let arr=[{
      id:"24631317-105c-4e03-a464-2add09e0a26a",
      Name:'vijit',
      Address: 'Devgarh',
      Phone: '7905597148',
      Email: 'vijit@gmail.com',
      Password: '123'
    }]
    localStorage.setItem('status',JSON.stringify(false))
    localStorage.setItem('userRegisterArray', JSON.stringify(arr))
    },[])
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
    

  },[registerData])
 


  const onSubmit = (values, action ) =>{
      dispatch(RegisterAction.updateRegister({
        id: uuid(),
        name: values.name,
        address: values.address,
        phone: values.phone,
        email: values.email,
        password: values.password
      }))
      
      Swal.fire({
        icon: 'success',
        title: 'Data Added successfully',
        confirmButtonText: 'OK',
        allowOutsideClick: false
      })
      action.resetForm();
        
    
    }

    

    const initialValues ={
      name:'',
      address: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
  }

  const validationSchema = Yup.object({
    name:Yup.string()
    .min(2)
    .required("Required"),
    address: Yup.string()
    .min(5)
    .required('Required'),
    phone: Yup.number()
    .min(1000000000)
    // .length(10)
    .required("Required"),
    email: Yup.string()
    .email('Invalid email id')
    .required("Required") ,
    password: Yup.string()
    .min(3)
    .required("Required"),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')],'Both Password need to be same!')
    .required("Required")
  });


//   console.log('setData', registerData)
  return (
    <div  className={styles.registermaindiv}>
        <HeroSlider />
         <h1>Sign up!</h1>
        <Formik
           initialValues={initialValues}
           onSubmit={onSubmit}
           validationSchema={validationSchema}
        >
            <Form>
                <Field 
                type='text' 
                name='name' 
                placeholder='Enter Name'
                autoComplete='off'
                className={styles.registerFeild}
                />
        
                <ErrorMessage name='name' component={TextError} />
                 <br />

                <Field 
                type='text' 
                name='address' 
                placeholder='Enter Address'
                className={styles.registerFeild}

                />
                 <ErrorMessage name='address' component={TextError}/>
<br />
                <Field 
                type='text' 
                name='phone' 
                placeholder='Enter Phone number'
                className={styles.registerFeild}

                />
                  <ErrorMessage name='phone' component={TextError}/>

<br />
                <Field 
                type='email' 
                name='email' 
                placeholder='Enter Email'
                className={styles.registerFeild}
                autoComplete="off"
                />
                  <ErrorMessage name='email' component={TextError}/>

<br />
                <Field 
                type='password' 
                name='password' 
                placeholder='Enter Password'
                className={styles.registerFeild}

                />
                  <ErrorMessage name='password' component={TextError}/>
                <br />

                <Field 
                type='password' 
                name='confirmPassword' 
                placeholder='Confirm Password'
                className={styles.registerFeild}
                 
                />
                   <ErrorMessage name='confirmPassword' component={TextError}/>
                <br />

                <button
                type='submit'
                className={styles.button}

                >
                  Submit
                </button>
            </Form>
        </Formik>
    </div>
  )
}

export default Register