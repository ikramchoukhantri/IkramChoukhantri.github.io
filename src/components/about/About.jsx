import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
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
                            Bonjour ! Je suis Ikram, étudiante en ingénierie Business Intelligence & Analytics à l'ENSIAS. <br /><br />
                            Ma passion pour résoudre des problèmes a commencé avec mon intérêt pour les mathématiques dès mon plus jeune âge. En grandissant, j'ai décidé de poursuivre des études en informatique, car cela peut être utilisé comme un outil pour résoudre des problèmes et aider à construire des systèmes complexes à partir de zéro en utilisant n'importe quelle technologie disponible. <br /><br />
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
