import './AboutSection.css';
import AboutImage from '../../assets/restaurant.jpg';
function AboutSection() {

return (
    <div id='about-section-container'>
        <div id='about-section-banner'>
            <div id='about-section-card'>
                <h1 id='about-section-heading'>Little Lemon</h1>
                <h1 id='about-section-subheading'>Chicago</h1>
                <p id='about-section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
            <div id='about-section-image'>
                <span id='about-section-image-style-one'></span>
                <span id='about-section-image-style-two'></span>
                <span id='about-section-image-style-three'></span>
                <img id='about-section-image' src={AboutImage} alt='front serving'></img>
            </div>
        </div>
    </div>
)
}

export default AboutSection;