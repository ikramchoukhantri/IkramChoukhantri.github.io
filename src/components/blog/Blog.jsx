// Blog.jsx
import React from "react";
import "./Blog.css"; // Assurez-vous que le chemin est correct

// Importation des images des compétences
import PL_SQL from "../../assets/plsql.png";
import MySQL from "../../assets/mysql.png";
import SQL_Server from "../../assets/sqlserver.png";
import Numpy from "../../assets/numpy.png";
import Selenium from "../../assets/selenium.png";
import BeautifulSoup from "../../assets/beautifulsoup.png";
import TensorFlow from "../../assets/tensorflow.png";
import Pandas from "../../assets/pandas.png";
import ScikitLearn from "../../assets/scikitlearn.png";
import Matplotlib from "../../assets/matplotlib.png";
import SSIS from "../../assets/ssis.png";
import SSRS from "../../assets/ssrs.png";
import SSAS from "../../assets/ssas.png";
import PowerBI from "../../assets/powerbi.png";
import MongoDB from "../../assets/mongodb.png";
import Python from "../../assets/python.png";
import C_Programming from "../../assets/c.png";
import CPP_Programming from "../../assets/cpp.png";
import Java from "../../assets/java.png";
import Seaborn from "../../assets/seaborn.png";
import Pytorch from "../../assets/pytorch.png";
import Geometric from "../../assets/geometric.png";
import NetworkX from "../../assets/networkx.png";
import Oracle from "../../assets/oracle.png";
import Linux from "../../assets/linux.png";
import Photoshop from "../../assets/photoshop.png";
import Illustrator from "../../assets/illustrator.png";
import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";

const skills = [
    { category: "Bases de Données", technologies: [
        { image: PL_SQL },
        { image: MySQL },
        { image: SQL_Server },
        { image: MongoDB },
        { image: Oracle },
    ]},
    { category: "Data Science", technologies: [
        { image: Numpy },
        { image: Pandas },
        { image: ScikitLearn },
        { image: Matplotlib },
        { image: Seaborn },
        { image: TensorFlow },
        { image: Pytorch },
        { image: Geometric },
        { image: NetworkX },
    ]},
    { category: "Web Scraping", technologies: [
        { image: Selenium },
        { image: BeautifulSoup },
    ]},
    { category: "ETL et BI", technologies: [
        { image: SSIS },
        { image: SSAS },
        { image: SSRS },
        { image: PowerBI },
    ]},
    { category: "Langages de Programmation", technologies: [
        { image: Python },
        { image: C_Programming },
        { image: CPP_Programming },
        { image: Java },
        { image: HTML },
        { image: CSS },
    ]},
    { category: "Autres Compétences", technologies: [
        { image: Linux },
        { image: Photoshop },
        { image: Illustrator },
    ]}
];

const Blog = () => {
    return (
        <section className="portfolio container section" id="blog">
            <h2 className="section__title">Mes compétances </h2>
            <div className="skills__container">
                {skills.map((skillCategory, index) => (
                    <div key={index} className="skills__category">
                        <h3>{skillCategory.category}</h3>
                        <div className="skills__list">
                            {skillCategory.technologies.map((tech, index) => (
                                <div key={index} className="skill__item">
                                    <img src={tech.image} alt="skill" className="skill__img"/>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
