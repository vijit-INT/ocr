
import styles from './Navbar.module.css'
import img1 from '../Assets/img/Capture.PNG';
import React, { useEffect, useState } from 'react';
import { createWorker } from 'tesseract.js';

const Scanner = () => {
   const [image, setImage] = useState(null);
   const [textResult, setTextResult] = useState("")
   const worker = createWorker();
  const handleChange = (e) => {
    setImage(e.target.files[0])
  }

  const convertImageToText = async() => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const {data} = await worker.recognize(image);
      setTextResult(data.text)
  }
console.log("vijit singh", textResult)
  useEffect(()=> {
         convertImageToText()
  },[image])

  return (
    <div>
      <div className={styles.main}>
         <h2>Please select an image</h2>
         <input type="file" onChange={handleChange} />
      </div>
 <div className={styles.scannerMainDiv}>
    
      <div className={styles.ocrImage}>
        {image && (
         <div>
          <img src={URL.createObjectURL(image)} alt='thumb' style={{height:"300px",width:"400px"}}/>
         </div>
        )           
        }
      </div>
      <div className={styles.ocrImage}>
        {textResult && (
        <div>
          <p>{textResult}</p>
           </div>
        )}
      </div>
        
    </div>
    </div>
   
  )
}

export default Scanner