import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div className="footer">
            <p>Copyright &copy; . All Rights Reserved</p>
            <p>Terms & Conditions</p>
            <p>Privacy and Policy</p>
            <ul>
                <li><FacebookIcon/></li>
                <li><TwitterIcon/></li>
                <li><LinkedInIcon/></li>
                <li><InstagramIcon/></li>
            </ul>
        </div>
    )
}

export default Footer
