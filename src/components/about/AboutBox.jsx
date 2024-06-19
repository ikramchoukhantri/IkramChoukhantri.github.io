import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">+6</h3>
                    <span className="about__subtitle">Certifications Obtenues</span>
                </div>
            </div>

            <div className="about__box">
                <RiCupLine className='about__icon' />

                <div>
                    <h3 className="about__title">+7</h3>
                    <span className="about__subtitle">Langages de Programmation Maîtrisés</span>
                </div>
            </div>

            <div className="about__box">
                <RiGroupLine className='about__icon' />

                <div>
                    <h3 className="about__title">+15</h3>
                    <span className="about__subtitle">Projets Académiques Réalisés</span>
                </div>
            </div>

            <div className="about__box">
                <RiTrophyLine className='about__icon' />

                <div>
                    <h3 className="about__title">+5</h3>
                    <span className="about__subtitle">Hackathons Participés</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox