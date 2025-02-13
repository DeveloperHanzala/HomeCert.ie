import React, { useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
const Contact = () => {
     const location = useLocation();
    
        useEffect(() => {
          // Check if a hash exists in the URL
          if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the element
            }
          }
        }, [location]);

  return (
    <>
       <div id='get-in-touch' className='conatiner-fluid contactbg'>
        <div className='text-center'>
            <h1 className='accesshead'>Contact</h1>
            <p><Link to={"/"} className='decnone'> Home <IoIosArrowForward /></Link>  <span className='text-warning'> Contact</span></p>
        </div>
    </div>
    <div className='container mt-5 mb-5'>
        <div className='row contact2bg'>
            <div className='col-md-6 '>
                <div className='p-4'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952.9291448798015!2d-9.81030490258172!3d53.76301455580766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4859818cfff67113%3A0xa00c7a99731f2b0!2sClooncarrabaun%2C%20Louisburgh%2C%20Co.%20Mayo%2C%20Ireland!5e0!3m2!1sen!2s!4v1739294457562!5m2!1sen!2s" className='w-100' height={450} style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='col-md-6 p-5 p-md-4'>
            <div>
                <h2 className='contacttext'>Get In <span className='text-warning'>Touch</span> </h2>
                <p className='contact-p'>We'd love to hear from you! Whether you have a question about our services, need assistance, or you're in the neighborhood and want to check in, feel free to reach out.</p>
            </div>
            <div >
              <span className='fs-5 text-white contact-p'>info@homecert.ie</span>
                {/* <form className='forma '>
                    <input type='text' className='form-control p-2 mb-3' placeholder='Name *' />
                    <input type='email' className='form-control p-2 mb-3' placeholder='Email' />
                    <input type='text' className='form-control p-2 mb-3' placeholder='Phone number *' />
                    <select className="form-control p-2 mb-3" placeholder="Select a service">
  <option disabled selected>
    Select a service
  </option>
  <option value="service1">Service 1</option>
  <option value="service2">Service 2</option>
  <option value="service3">Service 3</option>
 </select>

<button className='form-control btn btn-warning fw-bold '>Send</button>

                </form> */}
            </div>
</div>
        </div>
    </div>


    </>
  )
}

export default Contact
