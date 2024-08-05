import './Contact.css'
import mail from '../../assets/mail-icon.png'
import location from '../../assets/location-icon.png'
import msg from '../../assets/msg-icon.png'
import phone from '../../assets/phone-icon.png'
import React from 'react'

//65b1f001-d389-4449-baff-02a05e7fdf7e

function Contact(){

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "65b1f001-d389-4449-baff-02a05e7fdf7e");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    }

    return(
        <div className='Contact'  id='contact'>
            <div className="left">
                <div className="msg">
                    <div className="heading">
                        <h3>Send us a message</h3>
                        <img src={msg}/>
                    </div>
                    <p>Feel free to reach out through contact form or 
                        find our contact information below. Your feedback, 
                        questions, and suggestions are important to us as 
                        we strive to provide exceptional service to our 
                        university community.</p>
                </div>
                <div className="details">
                    <div className="email">
                        <img src={mail}/>
                        <p>Contact@xyz</p>
                    </div>
                    <div className="phone">
                        <img src={phone}/>
                        <p>+1 123-456-wxyz</p>
                    </div>
                    <div className="location">
                        <img src={location}/>
                        <p>00 Massachusetts Ave, Cambridge
                        MA 00000, United States</p>
                    </div>
                </div>
            </div>
            <div className="right">
                <form onSubmit={onSubmit}>
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name' required/>
                    <label>Phone Number</label>
                    <input type='tel' placeholder='Enter your mobile number'  required/>
                    <label>Your Email</label>
                    <input type='text' placeholder='Enter your email id' required/>
                    <label>Write your message here</label>
                    <textarea name='message' rows="6" placeholder='Enter your message' required/>
                    <button type='submit' className='btn dark-btn'>Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact;