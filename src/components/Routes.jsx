import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './Home';
import Produtos from './Produtos';
import Lojas from './Lojas';
import Contato from './Contato';


const Routes = () => {

    return (
        <BrowserRouter>      
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Produtos" component={Produtos} />
                <Route path="/Lojas" component={Lojas} />
                <Route path="/Contato" component={Contato} />
                <Route component={() => <div><h1>Page 404!</h1></div>} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;