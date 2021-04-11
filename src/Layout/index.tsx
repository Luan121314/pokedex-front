import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import OffCanvas from '../components/OffCanvas';
import manifest from '../manifest';
import Favorites from './Favorites';
import './styles.css';


interface LayoutProps {
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container-fluid container-app">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="navbar-content" >
                    <Link to="/pokemons" className="logo btn">
                        <span className="header-title" >{manifest.title}</span>
                    </Link>
                    <OffCanvas>
                        <Favorites/>
                    </OffCanvas>
                </div>
            </nav>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;