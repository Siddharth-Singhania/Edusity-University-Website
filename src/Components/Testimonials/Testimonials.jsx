import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
import { useRef } from 'react'

function Testimonials(){
    let inputRef  = useRef();
    let tx = 0;

    function slideForward(){
        if(tx>-50){
            tx -= 25;
            inputRef.current.style.transform= `translateX(${tx}%)`
        }    
    }

    function slideBackward(){
        if(tx<0){
            tx += 25
            inputRef.current.style.transform = `translateX(${tx}%)`
        }
    }


    return(
        <div className='Testimonials' id='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
            <div className="slider">
                <ul ref={inputRef}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>William Jackson</h3>
                                    <span>Edusity, Spain</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Siddharth Malhotra</h3>
                                    <span>Edusity, India</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my 
                                expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Emily Williams</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my 
                                expectations.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Tony Stark</h3>
                                    <span>Edusity, UK</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of 
                                the best decisions I've ever made. The supportive 
                                community, state-of-the-art facilities, and commitment 
                                to academic excellence have truly exceeded my 
                                expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials;