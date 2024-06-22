import React from 'react';
import './About.css';
import Image from '../../assets/image.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">À Propos de Moi</h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Bonjour ! Je m'appelle Ikram Choukhantri, une étudiante passionnée en ingénierie avec une spécialisation en Business Intelligence, Data Engineering et Analytics. Ma mission est de transformer les données brutes en chefs-d'œuvre stratégiques qui éclairent les décisions informées et créent une valeur tangible. Avec un éventail riche de compétences en Power BI, Tableau, Python, Data Warehousing, Intelligence Artificielle (ML & DL), et gestion de projet, je suis dévouée à l'art du storytelling de données. <br /><br />
                        Je suis ravie de mettre mes compétences et mes connaissances au service de défis réels et de contribuer à des projets révolutionnaires qui dévoilent le véritable potentiel des données. <br /><br />
                        </p>

                        <ul className="about__details">
                            <li><strong>Date de naissance :</strong> 20-08-2001</li>
                            <li><strong>Ville :</strong> Rabat, Maroc</li>
                            <li><strong>Téléphone :</strong> 0607203258</li>
                            <li><strong>Email :</strong> ikramchoukhantri@gmail.com</li>
                        </ul>

                        <button className="btn" onClick={downloadResume}>Télécharger le CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About;
