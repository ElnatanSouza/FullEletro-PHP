import React from 'react';

import './styles.css';

const Lojas = () => {
    return (
        <>
            <div className="container-fluid">
                <br /> <br />
                <p className="nossasLojas">Nossas Lojas</p>
                <br /> <br />
                <div className="lojas text-center my-0 row">
                    
                    <div className="col-lg-4 col-sm-12">
                        <h3> São Paulo </h3> <br />
                        <p>Avenida Pixiguinha, 3297, São Paulo - SP</p>
                        <p> Brás - Cep: 05198-350 </p>
                        <p> (11) 2558-9875 </p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h3> Rio de Janeiro </h3> <br />
                        <p> Avenida Bossa Nova, 2207, Rio de Janeiro - RJ </p>
                        <p> Tijuca - Cep: 0753-015 </p>
                        <p> (21) 3859-9812 </p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <h3> Minas Gerais </h3> <br />
                        <p> Travessa Queijo Fino, 168, Minas Gerais - MG </p>
                        <p> Lagoa - Cep: 0438-066 </p>
                        <p> (31) 4621-6712 </p>
                    </div>

                </div>
                <br /> <br /> <br />
                <hr />
                <br /> <br /> <br /> <br />
            </div>

        </>
    );
}

export default Lojas;
