import React,{useRef,useState} from 'react'
import functions from './functions';
import toast from 'react-hot-toast';
import { send } from 'emailjs-com';

const ContactSection = ({myRef}) => {


  const [contactData, setContactData] = useState({
    name:"",
    email:"",
    phone:"",
    message: ""
  })

  


  
  const submitHandler = () =>{
    
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if(re.test(contactData.email)){
      if( contactData.name && contactData.phone){
        send(
          'service_fs1k2we',
          'template_zsove4c',
          contactData,
          '4TxyV8GjKOXzmCQQw'
        )
        .then((response) => { 
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
      setContactData({
        name:"",
        email:"",
        phone:"",
        message: ""
      })
      toast('Mesaj göndərildi');
    }else{
      alert('xaiş edirik xanaların hamısını doldurun')
    }
    }else{
      alert("Emaili doğru yazın")
    }
  }
 

  return (
  <section ref={myRef} id="Əlaqə" className="section-4 " >
    <div className="container"  >
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="contact-text">
              <h3>Əlaqə</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-div">
            <form action="">
              <div className="three-div">
                <label htmlFor="name"> Ad:
                  <input id="name" value={contactData.name}   type="text" onChange={(e) => setContactData({
                    ...contactData, name:e.target.value
                  })}  required />
                </label>
                <label htmlFor="Email"> Email:
                  <input id="email" value={contactData.email} type="email" onChange={(e) => setContactData({
                    ...contactData, email:e.target.value
                  })} required />
                </label>
                <label htmlFor="Phone"   > Telefon:
                  <input id="phone" value={contactData.phone} type="number" onChange={(e) => setContactData({
                    ...contactData, phone:e.target.value
                  })} required />
                </label>
              </div>
              <label htmlFor="message"> Mesaj:
                <textarea id="message" value={contactData.message} onChange={(e) => setContactData({
                  ...contactData,  message:e.target.value
                  })} name="text" ></textarea>
              </label>

            </form>
            <button onClick={() => submitHandler()} id="btn">Təsdiq</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactSection