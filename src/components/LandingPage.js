//IMPORTS
import React from 'react';
import promoImage from '../assets/image 1.png';
import { Box, Grid, Typography } from '@material-ui/core'
import clockIcon from '../assets/icons/clock.svg';
import workIcon from '../assets/icons/workplace.svg';
import teamIcon from '../assets/icons/teamwork.svg';
import fruitIcon from '../assets/icons/fruits.svg';
import arrowLeft from '../assets/arrowleft.png';
import arrowRight from '../assets/arrowright.png';
import instaIcon from '../assets/instagram-icon.png';

export const LandingPage = () => {

    return (
        <Grid className="animate__animated animate__fadeIn">
            <Box className="landing-background">
                <p>
                    Bienvenido a tu  <strong>Entrevista Tecnica</strong> en FRONTEND
                </p>
            </Box>
            <Grid item xs={12}>
                <Box className="landing-ribbon">
                    <div className="landign-ribbon-image">
                        <img className="ribbon-image" src={promoImage} alt="cinta" />
                    </div>
                    <div className="landing-ribbon-text">
                        <p>Trabajamos para <strong>Converitr ideas</strong> en <strong>productos</strong></p>
                    </div>
                </Box>
            </Grid>
            <div id="benefits" className="benefits-section">
                <Typography variant="subtitle1" className="benefits-text">
                    Entre los <span>beneficios</span> que 
                    <br />
                    <strong>ofrecemos</strong> se encuentran
                </Typography>
            </div>
            <ul className="list-benefits animate__animated animate__fadeIn">
                <img src={arrowLeft} alt="flecha" />
                <li className="list-item">
                    <img src={clockIcon} alt="Flexibilidad horaria" />
                    <p>Flexibilidad horaria</p>
                </li>
                <li className="list-item">
                    <img src={workIcon} alt="Home office" />
                    <p>Home office</p>
                </li>
                <li className="list-item item-responsive">
                    <img src={teamIcon} alt="Capacitaciones y workshops" />
                    <p>Capacitaciones y workshops</p>
                </li>
                <li className="list-item item-responsive">
                    <img src={fruitIcon} alt="Snacks, frutas y bebidas gratis" />
                    <p>Snacks, frutas y bebidas gratis</p>
                </li>
                <img src={arrowRight} alt="" />
            </ul>
            <div className="more-info-section">
                <p>Gracias por <span>completar el ejercicio</span></p>
                <small>Te invitamos a ver mas informacion</small>
                <div className="info-actions">
                    <a href="https://www.instagram.com/waconomads/" rel="noreferrer" target="_blank" className="info-instagram">
                        <img src={instaIcon} alt="instagram-icon" />
                    </a>
                    <a href="https://wacoservices.com/" rel="noreferrer" className="info-button" target="_blank" role="button">Conocer más</a>
                </div>
            </div>
        </Grid>
    )
}
