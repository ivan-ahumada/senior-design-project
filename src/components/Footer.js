import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import './Footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className = "footer-subscription-heading">
                    Join the Gather newsletter to receive new updates that are added!
                </p>
                <p className = "footer-subscription-text">
                    You can unsubscribe at any time. (please dont)
                </p>
                <div className= "input-areas">
                    <form>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Your Email"
                            className="footer-input"
                         />
                         <Button buttonStyle='btn--outline'> Subscribe </Button>
                    </form>
                </div>
            </section>
    <div class='footer-links'>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                </div>
                </div>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Hulu</Link>
                    <Link to='/'>DailyMotion</Link>
                </div>
                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link to='/'className="social-logo">
                        TRVL <i className = "fab fa-typo3"></i>
                    </Link>
                </div>
                <small className="website-rights">TRVL 2021</small>
                <div className ="social-icons">
                    <Link className="social-icon-link facebook"
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className= 'fab fa-facebook-f' />
                    </Link>
                    <Link className="social-icon-link instagram"
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <i className= 'fab fa-instagram' />
                    </Link>
                    <Link className="social-icon-link twitter"
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <i className= 'fab fa-twitter' />
                    </Link>

            </div>
            </div>
        </section>
    </div>
    )
}

export default Footer
