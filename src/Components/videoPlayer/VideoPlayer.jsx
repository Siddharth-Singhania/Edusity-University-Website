import './VideoPlayer.css'
import clg_video from '../../assets/college-video.mp4'
import { useRef } from 'react';

function VideoPlayer(props){
    const inputRef = useRef(null);

    function stop(e){
        if(e.target == inputRef.current){
           props.setplay(false);
        }
    }


    return(
        <div className={`VideoPlayer ${props.play?null:`hide`}`} ref={inputRef} onClick={(e)=>stop(e)}> 
            <video src={clg_video} autoPlay muted controls></video>
        </div>
    )
}

export default VideoPlayer;