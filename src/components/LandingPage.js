import React from 'react';
import promoImage from '../assets/image 1.png';
import {Typography} from '@material-ui/core'
import clockIcon from '../assets/icons/clock.svg';
import workIcon from '../assets/icons/workplace.svg';
import teamIcon from '../assets/icons/teamwork.svg';
import fruitIcon from '../assets/icons/fruits.svg';
import arrowLeft from '../assets/arrowleft.png';
import arrowRight from '../assets/arrowright.png';
import instaIcon from '../assets/instagram-icon.png';

export const LandingPage = () => {

    const items = [
        {
            img: clockIcon,
            description: 'Flexibilidad horaria'
        },
        {
            img: workIcon,
            description: 'Home office'
        },
        {
            img: teamIcon,
            description: 'Capacitaciones y workshops'
        },
        {
            img: fruitIcon,
            description: 'Snacks, frutas y bebidas gratis'
        },
    ];

    return (
        <div>
            <div>
                imagen
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="landing-ribbon">
                <div className="landign-ribbon-image">
                    <img className="ribbon-image" src={promoImage} alt="app-image" />
                </div>
                <div className="landing-ribbon-text">
                    <p>Trabajamos para <strong>Converitr ideas</strong> en <strong>productos</strong></p>
                </div>
            </div>
            <div id="benefits" className="benefits-section">
                <Typography variant="subtitle1" className="benefits-text">
                    Entre los <span>beneficios</span> que 
                    <br />
                    <strong>ofrecemos</strong> se encuentran
                </Typography>
            </div>
            <ul className="list-benefits">
                <img src={arrowLeft} alt="" />
                <li className="list-item">
                    <img src={clockIcon} alt="Flexibilidad horaria" />
                    <p>Flexibilidad horaria</p>
                </li>
                <li className="list-item">
                    <img src={workIcon} alt="Home office" />
                    <p>Home office</p>
                </li>
                <li className="list-item">
                    <img src={teamIcon} alt="Capacitaciones y workshops" />
                    <p>Capacitaciones y workshops</p>
                </li>
                <li className="list-item">
                    <img src={fruitIcon} alt="Snacks, frutas y bebidas gratis" />
                    <p>Snacks, frutas y bebidas gratis</p>
                </li>
                <img src={arrowRight} alt="" />
            </ul>
            <div className="more-info-section">
                <p>Gracias por <strong>completar el ejercicio</strong></p>
                <small>Te invitamos a ver mas informacion</small>
                <div className="info-actions">
                    <a href="https://www.instagram.com/waconomads/" className="info-instagram">
                        <img src={instaIcon} alt="instagram-icon" />
                    </a>
                    <a href="https://wacoservices.com/" className="info-button" role="button">Conocer más</a>
                </div>
            </div>
        </div>
    )
}
