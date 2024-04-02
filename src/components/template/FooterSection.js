import './FooterSection.css'
import footerLogo from '../../assets/Asset 20@4x.png'
function FooterSection () {
    return (
        <div id='footer-container'>
            <img id='footer-logo' src={footerLogo} alt='footer presentation of logo'></img>
            <div className='footer-column'>
                <div className='footer-title'>Navigation</div>
                    <a className='footer-selection' href='/home'>Home</a>
                    <a className='footer-selection' href='/about'>About</a>
                    <a className='footer-selection' href='/menu'>Menu</a>
                    <a className='footer-selection' href='/reservation'>Reservation</a>
                    <a className='footer-selection' href='/order'>Order Online</a>
                    <a className='footer-selection' href='/login'>Login</a>
            </div>
            <div className='footer-column'>
                <div className='footer-title'>Contact</div>
                    <p className='footer-text' >Address</p>
                    <p className='footer-text'>Phone Number</p>
                    <p className='footer-text'>Email</p>
            </div>
            <div className='footer-column'>
                <div className='footer-title'>Social Media</div>
                    <a className='footer-selection' href='/Facebook'>Facebook</a>
                    <a className='footer-selection' href='/Twitter'>Twitter</a>
                    <a className='footer-selection' href='/Instagram'>Instagram</a>
            </div>
        </div>
    )
}

export default FooterSection; 