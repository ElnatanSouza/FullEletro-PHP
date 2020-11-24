import React from 'react';

import './styles.css';
import Menu from '../Menu';
import Footer from '../Footer';
import Routes from '../Routes';

const App = () => {
    return (
        <>
            <Menu />
            <Routes />
            <Footer />
        </>
    );
}

export default App;