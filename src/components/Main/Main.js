import React from "react";
import Carouselka from "../Carousel/Carousel";

export default function Main({news}){
    return(
        <div>
            <Carouselka/>
            <div className='news'>
                {news.map(data=>
                    <div className={'post'} key={data.id}>
                        <div className={'post_header'}>
                            <h2>{data.name}</h2>
                        </div>
                        <div className={'post_description'}>
                            <img src={require('../../image/'+ data.image).default} alt=""/>
                        </div>
                        <div className={'post_date'}>
                            <p>{data.date}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}