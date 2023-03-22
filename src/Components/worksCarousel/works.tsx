import './works.css';
import { useEffect, useState, useRef } from 'react';
import { SlArrowRightCircle, SlArrowLeftCircle } from "react-icons/sl";

type Item = {
    id: number;
    img: string;
    alt: string;
    description: string;
    title: string;
    link: string
}

const Works = () => 
{
        const [workData, setWorkData] = useState([]);
        const imgs: string[] = [];
        const carousel: any | null = useRef(null);

        useEffect( () => {
            fetch('https://my-procfile.vercel.app/static/works-cards.json')
                .then((response) => response.json() )
                .then(setWorkData);
            }, []
        );

        const handleLeftClick = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(carousel.current.offsetWidth);
            carousel.current.scrollLeft -= carousel.current.offsetWidth;
        }
        const handleRightClick = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            console.log(carousel.current.offsetWidth);
            carousel.current.scrollLeft += carousel.current.offsetWidth;
        }
            
        if (!workData || !workData.length ) return null;
    return(
        <div>
            <div className='carousel-container'>
                
                <div className="crousel-logo">
                    <h2>Trabalhos</h2>

                </div>

                <div className='carousel' ref={carousel}>
                
                { workData.map( (item: Item) => {
                        imgs.push(item.img)
                       return(
                            <div className='item' key={item.id}>
                            <div className="image">
                                <img src={item.img} alt={item.alt}/>
                            </div>
                            <div className='info'>
                                <span className="title"> <h3>{item.title}</h3> </span>
                                <span className='description'> <p>{item.description}</p> </span>
                                <div  className="portifolio-button"><a href={item.link} target={"blank"}> Acesse </a></div>
                            </div>

                            </div>
                       )

                    })
                    }
                    
                    
                </div>
                <div className='buttons'>
                    
                    <button onClick={handleLeftClick} className="icon-carousel--button"><SlArrowLeftCircle className='leftIcon icon'/></button>
                    <button  onClick={handleRightClick} className="icon-carousel--button"><SlArrowRightCircle className='leftIcon icon'/></button>
                </div>


            </div>

        </div>
        )
}

export default Works;