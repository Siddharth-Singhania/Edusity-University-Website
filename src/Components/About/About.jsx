import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

function About(props){
    function video(){
        props.setplay(true);
    }
    return(
        <div className='about' id='about'>
            <div className="about-left">
                <img src={about_img} className='about-img'/>
                <img src={play_icon} className='play-icon' onClick={()=>video()} />
            </div>
            <div className="about-right">
                <h3>About University</h3>
                <h2>Nurturing Tomorrow's Leader Today</h2>
                <p>Embark on a transformative Educational journey with our
                university's comprehensive education programs. Our cutting-edge
                curriculum is designed to empower students with the knowledge,
                skills, and experiences needed to  excel in the dynamic field of
                education.</p>
                <p>With the focus on innovation, hands-on learning, and personalized
                mentorship, our programs prepare aspiring educators to make a
                meaningful inpact in classrooms, schools, and communities.</p>
                <p>Whether you aspire to become a teacher, administrator,
                counselor, or educational leader, our diverse range of programs 
                offers the perfect pathway to achieve your goals and unlock your 
                full potential in shaping the future of education.</p>
            </div>
        </div>
    )
}

export default About;