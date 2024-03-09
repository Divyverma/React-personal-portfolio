import React from 'react'
import '../styling/Contact.css'

export default function ContantPage() {
  return (
    <>
        
        <section class="about-section-c" id="contact">
        <div class="about-div-c">
            <div class="about-content-c">
                <h1 class="about-heading-c">Contact <span>ME</span></h1>
                <p>Hello and <span>thank you</span> for your interest in reaching out! Use the form below to get in touch regarding any <span>inquiries</span>, <span>collaborations</span>, or job <span>opportunities</span>. Your details are secure, and I respect your <span>privacy.</span> I typically respond within 2-3 days and look forward to connecting with you.</p>
            </div>
        </div>

        <div class="lower-abt-c">
            <div class="left-abt-c">
                
            </div>

            <div class="right-abt-c">
                    <form action="https://api.web3forms.com/submit" method="POST">
                    <h3 class="form-h" >Get in <span>Touch</span></h3>

                    <div class="inform">
                        <input type="hidden" name="access_key" value="8778ac67-1854-415f-8d4a-c30dfbcb9de8" />

                        <input type="text" name="name" placeholder="Enter your Name" required />
                        <input type="email" name="email" placeholder="Enter Your Email" required />
                        <input type="text" name="phone" placeholder="Enter your phone" required />
                        <textarea name="message" cols="30" rows="5" placeholder="Your message..."></textarea>
    
                        <button class="buu" type="submit">Send</button>
                    </div>
                    
                    </form>
                </div>  

        </div>
    </section>


    </>
  )
}
