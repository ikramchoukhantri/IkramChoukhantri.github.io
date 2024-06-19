import React from 'react';
import './Services.css';
import { RiMapPin2Line } from 'react-icons/ri';

const data = [
    {
        id: 1,
        title: "Ecole Nationale Supérieure d'Informatique et d'Analyse des Systèmes - ENSIAS",
        description: (
            <>
                <p><RiMapPin2Line /> Rabat, Morocco</p>
                <p><strong>Business Intelligence and Analytics Engineer</strong></p>
                <p>Sep 2022</p>
                
            </>
        ),
    },
    {
        id: 2,
        title: "Université Hassan II Ben M'Sik",
        description: (
            <>
                <p><RiMapPin2Line /> Casablanca, Morocco</p>
                <p><strong>Licence en Mathématiques appliquées</strong></p>
                <p>Sep 2019 - Jun 2022</p>
                
            </>
        ),
    },
    {
        id: 3,
        title: "Lycée Euclide",
        description: (
            <>
                <p><RiMapPin2Line /> Mohammedia, Morocco</p>
                <p><strong>Baccalauréat en Sciences mathématiques A option Français</strong></p>
                <p>2018 - 2019</p>
                
            </>
        ),
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Parcours Académique</h2>

            <div className="services__container grid">
                {data.map(({ id, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <h3 className="services__title">{title}</h3>
                            <div className="services__description">{description}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services;
