import "./Contact.css";
import Msg_icon from "../../assets/msg-icon.png";
import Mail_icon from "../../assets/mail-icon.png";
import Phone_icon from "../../assets/phone-icon.png";
import Location_icon from "../../assets/location-icon.png";
import White_arrow from "../../assets/white-arrow.png";
import { useState } from "react";

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2bcd6add-bb97-4d35-99ce-66a0f621203c");
    
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
      };
    return ( 
        <div className="contact">
            <div className="contact-col">
                <h3>Send us a message <img src={Msg_icon} alt="Msg icon" /></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Nemo rem culpa aut, atque dignissimos perferendis dolorem facere 
                nostrum debitis, odio voluptates et praesentium quae! Animi 
                impedit iure repudiandae officiis iusto.</p>
                <ul>
                    <li><img src={Mail_icon} alt="mail icon" />aptitudeforbeginners@gmail.com</li>
                    <li><img src={Phone_icon} alt="phone icon" />07989783010</li>
                    <li><img src={Location_icon} alt="location icon" />41 Osborne Road <br/>
                        Forest Gate,London, UK
                    </li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name="Name" placeholder="Enter your name"  
                        required
                    />
                    <label>Phone Number</label>
                    <input type="tel" name="Phone" placeholder="Enter your Phone number"  
                        required
                    />
                    <label>Write your message here</label>
                    <textarea name="Message" rows="6" placeholder="Enter your message here"
                        required 
                    />
                    <button type="submit" className="btn dark-btn">
                        Submit Now <img src={White_arrow} alt="arrow png" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
     );
}
 
export default Contact;