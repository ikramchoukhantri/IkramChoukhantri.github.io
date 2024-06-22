import React from 'react';
import './Testimonials.css';
import Image1 from '../../assets/steve.png';

import Image3 from '../../assets/albert.png';
import Image4 from '../../assets/marie.png';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const InspirationalQuotes = () => {

    const data = [
        {
            id: 1,
            image: Image3,
            author: "Albert Einstein",
            quote: "La connaissance s'acquiert par l'expérience, tout le reste n'est que de l'information.",
        },
        {
            id: 2,
            image: Image4,
            author: "Marie Curie",
            quote: "On ne peut pas espérer construire un monde meilleur sans améliorer les individus. À cette fin, chacun de nous doit travailler à son propre perfectionnement et, en même temps, partager une responsabilité générale pour toute l'humanité.",
        },
        {
            id: 3,
            image: Image1,
            author: "Steve Jobs",
            quote: "La créativité, c'est juste connecter les choses. Quand vous demandez aux gens créatifs comment ils ont fait quelque chose, ils se sentent un peu coupables parce qu'ils ne l'ont pas vraiment fait, ils ont juste vu quelque chose. Cela leur semblait évident après un moment.",
        },
        
    ];

    return (
        <section className="testimonials container section">

            <h2 className="section__title">Quotes Inspirantes</h2>

            <Swiper className="testimonial__container grid"
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                grabCursor={true}
                pagination={{ clickable: true }}>
                {data.map(({ id, image, author, quote }) => {
                    return (
                        <SwiperSlide className="testimonial__item" key={id}>
                            <div className="thumb">
                                <img src={image} alt="" />
                            </div>
                            <h3 className="testimonial__title">{author}</h3>
                            <div className="comment">"{quote}"</div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
}

export default InspirationalQuotes;
