import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Portfolio = () => {
    const [items, setItems] = useState(Menu);
    const [activeFilter, setActiveFilter] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const filterItems = (categoryItem) => {
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category.includes(categoryItem);
        });
        setItems(updatedItems);
    };

    const openModal = (project) => {
        setCurrentProject(project);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentProject(null);
    };

    return (
        <section className="portfolio container section" id="portfolio">
            <h2 className="section__title">Projets</h2>
            <div className="portfolio__filters">
                <span className={activeFilter === 0 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { setItems(Menu); setActiveFilter(0) }}>
                    Tous
                </span>
                <span className={activeFilter === 1 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Business Intelligence"); setActiveFilter(1) }}>
                    Business Intelligence
                </span>
                <span className={activeFilter === 2 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Data Science"); setActiveFilter(2) }}>
                    Data Science
                </span>
                <span className={activeFilter === 3 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Data Engineering"); setActiveFilter(3) }}>
                    Data Engineering
                </span>
                <span className={activeFilter === 4 ? 'portfolio__item portfolio__item-active' : 'portfolio__item'} onClick={() => { filterItems("Autre"); setActiveFilter(4) }}>
                    Autre
                </span>
            </div>
            <div className="portfolio__container grid">
                {items.map((elem) => {
                    const { id, image, title, category, repositoryUrl } = elem;
                    return (
                        <motion.div
                            layout
                            animate={{ opacity: 1 }}
                            initial={{ opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="portfolio__card"
                            key={id}
                            onClick={() => openModal(elem)}
                        >
                            <div className="portfolio__thumbnail">
                                <img src={image} alt={title} className="portfolio__img" height="267" />
                                <div className="portfolio__mask"></div>
                            </div>
                            <span className="portfolio__category">{category.join(', ')}</span>
                            <h3 className="portfolio__title">{title}</h3>
                            <a href={repositoryUrl} target="_blank" rel="noreferrer" className="portfolio__button">
                                <RiGithubLine className="portfolio__button-icon" />
                            </a>
                        </motion.div>
                    );
                })}
            </div>
            {currentProject && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    contentLabel="Project Details"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <h2>{currentProject.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: currentProject.description }} />
                    <button className="close-btn" onClick={closeModal}>Close</button>
                </Modal>
            )}
        </section>
    );
};

export default Portfolio;
