import React from "react";
import './news.scss'

export default function News({news}){
    return(
        <div className='news'>
            {news.map(data=>
                <div className={'post'} key={data.id}>
                    <div className={'post_header'}>
                        <h2>{data.name}</h2>
                    </div>
                    <div className={'post_description'}>
                        <img src={require('../../image/'+ data.image).default} alt=""/>
                        <p>{data.description}</p>
                    </div>
                    <div className={'post_date'}>
                        <p>{data.date}</p>
                    </div>
                </div>
            )}
        </div>
    )
}