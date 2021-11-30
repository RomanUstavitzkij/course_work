import React from "react";
import {Link, Outlet} from 'react-router-dom'
import './Header.scss'
import Footer from "../Footer/Footer";

export default function Header(){
    return(
        <>
            <div className={'width'}>
                <div className={'header'}>
                    <div className={'header_name'}>
                        <h2 >Mil Hosp</h2>
                    </div>
                    <div className={'header_links'}>
                        <Link className={'header_link'} to={'/'}>Home</Link>
                        <Link className={'header_link'} to={'/news'}>News</Link>
                        <Link className={'header_link'} to={'/gallery'}>Gallery</Link>
                        <Link className={'header_link'} to={'/info'}>Info</Link>
                    </div>
                </div>
            </div>
            <Outlet/>
            <Footer/>
        </>
    )
}