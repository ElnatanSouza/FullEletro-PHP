import React from 'react';

import './styles.css';

const Lojas = () => {
    return (
        <>
            <div className="container-fluid">
                <br /> <br />
                <p className="nossasLojas">Nossas Lojas</p>
                <br /> <br /> 
                <table className="lojas text-center my-0">
                    <tr>
                        <td>
                            <h3> São Paulo </h3> <br /> 
                            <p>Avenida Pixiguinha, 3297, São Paulo - SP</p>
                            <p> Brás - Cep: 05198-350 </p>
                            <p> (11) 2558-9875 </p>
                        </td>
                        <td>
                            <h3> Rio de Janeiro </h3> <br /> 
                            <p> Avenida Bossa Nova, 2207, Rio de Janeiro - RJ </p>
                            <p> Tijuca - Cep: 0753-015 </p>
                            <p> (21) 3859-9812 </p>
                        </td>
                        <td>
                            <h3> Minas Gerais </h3> <br /> 
                            <p> Travessa Queijo Fino, 168, Minas Gerais - MG </p>
                            <p> Lagoa - Cep: 0438-066 </p>
                            <p> (31) 4621-6712 </p>
                        </td>
                    </tr>
                </table>
                <br /> <br /> <br /> 
                <hr />
                <br /> <br /> <br /> <br />
            </div>

        </>
    );
}

export default Lojas;
