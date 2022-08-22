import React from 'react';
import projectsPC from '../../img/projectsPC.png';
import projectsPC_medium from '../../img/projectsPC_medium.png';
import projectsPC_large from '../../img/projectsPC_large.png';
import project1 from '../../img/project1.png';
import project2 from '../../img/project2.png';
import project3 from '../../img/project3.png';
import SwiperCore, { Navigation, Lazy, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

SwiperCore.use([Navigation]);

const ProjectSlide = () => {
    const cards = [
        {
            id: 1,
            link: 'https://github.com/JUL1VER/MarvelCharactersApp.React',
            imgprop: project1,
            description: 'Made a Marvel information portal with MarvelAPI connection using React and Redux.',
            techno: ['React', 'Redux', 'SCSS']
        },
        {
            id: 2,
            link: 'https://github.com/JUL1VER/FoodServiceApp.JS',
            imgprop: project2,
            description: 'Made a website of food delivery company with calories per day calculations using JS.',
            techno: ['Native JavaScript', 'CSS']
        },
        {
            id: 3,
            link: 'https://github.com/JUL1VER/GitHubSearch.TS',
            imgprop: project3,
            description: 'Made a simple website connected to GithubAPI for user repos search using React and TS.',
            techno: ['TypeScript', 'React', 'Redux', 'Tailwind']
        }
    ];

    const navigationPrevRef = React.useRef(null)
    const navigationNextRef = React.useRef(null)

    return (
        <div className='ProjectsBlock_content'>
            <div className='ProjectsBlock_content_textBlock'>
                <div className='ProjectsBlock_content_text'>
                    <Swiper
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        spaceBetween={500}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        { cards.map(card => (
                            <SwiperSlide key={card.id}>
                                <p className='ProjectsBlock_content_textInside'>{card.description}</p>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className='ProjectsBlock_contect_tecnho'>
                    <Swiper
                        loop={true}
                        onBeforeInit={(swiper) => {
                            swiper.params.navigation.prevEl = navigationPrevRef.current;
                            swiper.params.navigation.nextEl = navigationNextRef.current;
                        }}
                        spaceBetween={500}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        { cards.map(card => (
                            <SwiperSlide key={card.id}>
                                <ul className='ProjectsBlock_contect_tecnhoList'>
                                    { card.techno.map(technology => (
                                        <li>{technology}</li>
                                    ))}
                                </ul>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
            <div className='ProjectsBlock_conteiner'>
                <button ref={navigationPrevRef} className='ProjectsBlock_conteiner_prevButton'>
                    Prev
                </button>
                <Swiper
                    modules={[Lazy, EffectFade]}
                    lazy={true}
                    effect='fade'
                    loop={true}
                    className='ProjectsBlock_Swiper'
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;
                   }}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    { cards.map(card => (
                        <SwiperSlide key={card.id}>
                            <a href={card.link} target='_blank' rel="noreferrer">
                                <div className='ProjectsBlock_hover'/>
                                <img src={card.imgprop} alt="Project" className="ProjectsBlock_conteiner_projectPic"/>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <picture className="ProjectsBlock_conteiner_PCImg">
                    <source
                        className='ProjectsBlock_conteiner_PC'
                        media='(min-width: 1280px)'
                        srcSet={projectsPC_large}/>
                    <source
                        className='ProjectsBlock_conteiner_PC'
                        media='(min-width: 650px)'
                        srcSet={projectsPC_medium}/>
                    <img src={projectsPC} alt="PC" className="ProjectsBlock_conteiner_PC"/>
                </picture>
                <button ref={navigationNextRef} className='ProjectsBlock_conteiner_nextButton'>
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProjectSlide;