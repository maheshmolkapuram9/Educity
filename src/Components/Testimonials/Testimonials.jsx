import "./Testimonials.css";
import Next_icon from "../../assets/next-icon.png";
import Back_icon from "../../assets/back-icon.png";
import User_1 from "../../assets/user-1.png";
import User_2 from "../../assets/user-2.png";
import User_3 from "../../assets/user-3.png";
import User_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const moveForward = ()=>{
        if (tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const moveBackward = ()=>{
        if (tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    return ( 
        <div className="testimonials">
            <img src={Next_icon} alt="Next icon" className="next-btn" onClick={moveForward}/>
            <img src={Back_icon} alt="Back icon" className="back-btn" onClick={moveBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_1} alt="User1 img" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Provident, eaque. Aut quasi quos, possimus cum quidem 
                             facilis veritatis, nisi ipsa placeat vero sequi fuga! 
                             Officiis, repellendus magni. Architecto, iure tempore.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_2} alt="User2 img" />
                                <div>
                                    <h3>Mahesh</h3>
                                    <span>Abhyaas, Hyd</span>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Provident, eaque. Aut quasi quos, possimus cum quidem 
                             facilis veritatis, nisi ipsa placeat vero sequi fuga! 
                             Officiis, repellendus magni. Architecto, iure tempore.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_3} alt="User3 img" />
                                <div>
                                    <h3>Ganesh</h3>
                                    <span>Infosys, WGL</span>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Provident, eaque. Aut quasi quos, possimus cum quidem 
                             facilis veritatis, nisi ipsa placeat vero sequi fuga! 
                             Officiis, repellendus magni. Architecto, iure tempore.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={User_4} alt="User4 img" />
                                <div>
                                    <h3>Shiv Jack</h3>
                                    <span>Edusity, UK</span>
                                </div>
                            </div>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                             Provident, eaque. Aut quasi quos, possimus cum quidem 
                             facilis veritatis, nisi ipsa placeat vero sequi fuga! 
                             Officiis, repellendus magni. Architecto, iure tempore.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Testimonials;