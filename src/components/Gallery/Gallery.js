import React from "react";
import './gallery.scss'

export default function Gallery({news}){
    return(
        <div className='photo'>
            {news.map(data=>
                <div className={'photo_block'} key={data.id}>
                    <img className={'photo_block-img'} src={require('../../image/'+ data.image).default} alt=""/>
                </div>
            )}
        </div>
    )
}