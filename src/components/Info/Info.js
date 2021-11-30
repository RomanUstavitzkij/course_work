import React from "react"
import './info.scss'

export default function Info(){

    return(
        <div className={'info'}>
            <div className={'info_desc'}>
                <p className={'info_desc-links'}>My Instagram: <a href='https://www.instagram.com/romzezo/'>@romzezo</a></p>
                <p className={'info_desc-links'}>My GitHub: <a href='https://github.com/RomanUstavitzkij?tab=overview&from=2021-10-01&to=2021-10-31'>Roman Ustavitzkij</a></p>
            </div>
        </div>
    )
}