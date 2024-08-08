import "./VideoPlayer.css";
import College_video from "../../assets/collegevideo.mp4";
import { useRef } from "react";

const VideoPlayer = ({playState,setPlayState}) => {
    const player = useRef(null);

    const closingVideo = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }

    return ( 
        <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closingVideo}>
            <video src={College_video} muted autoPlay controls></video>
        </div>
     );
}
 
export default VideoPlayer;