import "./Campus.css";
import Gallery_1 from "../../assets/gallery-1.png";
import Gallery_2 from "../../assets/gallery-2.png";
import Gallery_3 from "../../assets/gallery-3.png";
import Gallery_4 from "../../assets/gallery-4.png";
import White_arrow from "../../assets/white-arrow.png";

const Campus = () => {
    return ( 
        <div className="campus">
            <div className="gallery">
                <img src={Gallery_1} alt="Gallery-1 img" />
                <img src={Gallery_2} alt="Gallery-2 img" />
                <img src={Gallery_3} alt="Gallery-3 img" />
                <img src={Gallery_4} alt="Gallery-4 img" />
            </div>
            <button className="btn dark-btn">
                See more here
                <img src={White_arrow} alt="White arrow png" />
            </button>
        </div>
     );
}
 
export default Campus;