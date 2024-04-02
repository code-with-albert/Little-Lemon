import './HeroSection.css';
import HeroImage from '../../assets/restauranfood.jpg'
function HeroSection() {
return (
    <div id='hero-section-container'>
        <div id='hero-section-banner'>
            <div id='hero-section-card'>
                <h1 id='hero-section-heading'>Little Lemon</h1>
                <h1 id='hero-section-subheading'>Chicago</h1>
                <p id='hero-section-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button id='hero-section-button'>Reserve Table</button> 
            </div>
            <img id='hero-section-image' src={HeroImage} alt='front serving'></img>
        </div>
    </div>
)
}

export default HeroSection;