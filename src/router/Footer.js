import React from 'react';
import footerIcon from '../assets/icon2.png';

export const Footer = () => {
    return (
        <div className="custom-footer">
            <div className="footer-logo-icon">
                <img src={footerIcon} className="footer-icon" alt="footer-icon" />
            </div>
        </div>
    )
}
