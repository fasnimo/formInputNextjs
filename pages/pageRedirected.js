import React, {useState} from 'react'
import Link from 'next/link'
import Footer from '../components/Footer'
import FormInput from '../components/FormInput'

export default function PageRedirected() {

    const [formSuccess, setFormSuccess] = useState(false)
    //const [formSuccessMessage, setFormSuccessMessage] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
      });

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
      
        setFormData((prevState) => ({
          ...prevState,
          [fieldName]: fieldValue
        }));
    }
    
    const submitForm = (e) => {
        // We don't want the page to refresh
        e.preventDefault()
        // console.log(e.target.value)
      
        // const formURL = e.target.action
        // const data = new FormData()
      
        // Turn our formData state into data we can use with a form submission
        // Object.entries(formData).forEach(([key, value]) => {
        //   data.append(key, value);
        // })
          
        setFormSuccess(true)  
    
        //POST the data to the URL of the form
        // fetch(formURL, {
        //   method: "POST",
        //   body: data,
        //   headers: {
        //     'accept': 'application/json',
        //   },
        // }).then(() => {
        //   setFormData({
        //     name: "",
        //     email: "",
        //     message: ""
        //   })
        // //   setFormSuccessMessage(data.submission_text)
        //   setFormSuccess(true)
        // })
    }
      
    

    return (
       <div className='text-center'>
            <Link href="/">
                <button className='btn btn-primary'>Home</button>
            </Link>
            <FormInput formsuccess={formSuccess} onsub={submitForm} oncha={handleInput} name={formData.name} email={formData.email} message={formData.message}/>
            {/* <div className='text-center'>
                <h1>Contact form</h1>
                {formSuccess ?
                <div className='text-center'>Form Submitted</div>
                :
                // <form method="POST" onSubmit={submitForm} className='text-center'>
                //     <div>
                //         <label>Name</label>
                //         <input type="text" name="name" onChange={handleInput} value={formData.name} />
                //     </div>

                //     <div>
                //         <label>Email</label>
                //         <input type="text" name="email" onChange={handleInput} value={formData.email} />
                //     </div>

                //     <div>
                //         <label>Message</label>
                //         <textarea name="message" onChange={handleInput} value={formData.message}></textarea>
                //     </div>
                //     <button className="btn btn-primary" type="submit">Send message</button>
                // </form>
                 }
            </div> */}
            {(formSuccess)?  
                <Footer name={formData.name} email={formData.email} message={formData.message}/>
            : <p>Form not submitted</p>}

       </div> 
    )
}
