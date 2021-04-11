import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/pokemons" exact component={Home} />
            <Route path="/pokemons/:id" exact component={Detail} />
        </BrowserRouter>
    )
}

export default Routes;