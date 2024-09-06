import React from 'react'


const FormInput = (props) => {
    return(
        <div className='text-center'>
            <h1>Contact form</h1>
            {props.formsuccess ?
            <div className='text-center'>Form Submitted</div>
            :
            <form method="POST" onSubmit={props.onsub} className='text-center'>
                        <div>
                            <label>Name</label>
                            <input type="text" name="name" onChange={props.oncha} value={props.name} />
                        </div>

                        <div>
                            <label>Email</label>
                            <input type="text" name="email" onChange={props.oncha} value={props.email} />
                        </div>

                        <div>
                            <label>Message</label>
                            <textarea name="message" onChange={props.oncha} value={props.message}></textarea>
                        </div>
                    <button className="btn btn-primary" type="submit">Send message</button>
            </form>
            }   
        </div>
    )
}

export default FormInput