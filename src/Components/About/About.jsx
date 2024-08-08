import "./About.css";
import About_img from "../../assets/about.png";
import Play_icon from "../../assets/play-icon.png";


const About = ({setPlayState}) => {
    return ( 
        <div className="about">
            <div className="about-left">
                <img src={About_img} alt="About img" className="about-img" />
                <img src={Play_icon} alt="Play icon img" className="play-icon" onClick={()=>{setPlayState(true)}}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow`s Leaders Today</h2>
                <p>Embark on a trans Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Odit laboriosam distinctio necessitatibus neque
                 error numquam quae velit sit labore, dignissimos voluptas nostrum,
                  quos tempore vero quaerat facilis ipsum qui ratione?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nam similique accusantium, hic odit ea aspernatur cupiditate 
                suscipit dolorem veniam quisquam eius qui dignissimos in autem 
                itaque perspiciatis maxime voluptate non!</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Modi doloribus facilis ut quisquam saepe! Explicabo nisi mollitia
                 vero maxime harum autem error porro, dolorem blanditiis eos modi
                 cumque provident atque.hic odit ea aspernatur cupiditate 
                suscipit dolorem veniam quisquam eius</p>
            </div>
        </div>
     );
}
 
export default About;