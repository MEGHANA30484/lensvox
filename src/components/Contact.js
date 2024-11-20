import React from 'react';
import './Contact.css';  // Ensure you have this CSS file for styling
 
function Contact() {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form action="https://api.web3forms.com/submit" method="POST" className="contact-us-form">
        <input type="hidden" name="access_key" value="ac199c89-88b5-4a9e-8c2a-e5ab96c292bd" />
       
        <label>
          First Name:
          <input type="text" name="firstName" placeholder="First Name" required />
        </label>
       
        <label>
          Last Name:
          <input type="text" name="lastName" placeholder="Last Name" required />
        </label>
       
        <label>
          Email:
          <input type="email" name="email" placeholder="Work Email" required />
        </label>
       
        <label>
          Company:
          <input type="text" name="company" placeholder="Your Company"/>
        </label>
       
        <label>
          Message:
          <textarea name="message"  placeholder="Message"></textarea>
        </label>
       
        <button type="submit" className="cta-button">Submit</button>
      </form>
      <p>Feel free to reach out to us for any inquiries or further information.</p>
    </div>
  );
}
 
export default Contact;
