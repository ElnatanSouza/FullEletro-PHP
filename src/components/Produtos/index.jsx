import React from 'react';

import './styles.css';

const Produtos = () => {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <br /> <br />
                    <aside className="categorias col-sm">
                        <p className="paragrafoCateg"> Categorias </p>
                        <br />
                        <ul className="lista navbar-nav ml-auto">
                            <li className="nav-item" onclick="exibirTodos()"> Todos (12) </li>
                            <li className="nav-item" onclick="exibir('geladeira')"> Geladeiras (3) </li>
                            <li className="nav-item" onclick="exibir('fogao')"> Fogões (2) </li>
                            <li className="nav-item" onclick="exibir('microondas')"> Microondas (3) </li>
                            <li className="nav-item" onclick="exibir('lavaRoupa')"> Lavadoura de roupa (2) </li>
                            <li className="nav-item" onclick="exibir('lavaLouca')"> Lava-louças (2) </li>
                        </ul>
                    </aside>

                    <div className="prod col-sm" id="geladeira">

                        <img id="imgProd" className="tamanhoprod" src="./img/geladeira.jpg" onmouseover="destaque(this)"
                            onmouseout="redimensiona(this)" />
                        <br />
                        <p> descrição </p>
                        <br />
                        <p className="strike"> R$ preço </p>
                        <br />
                        <p className="preco"> R$ preço </p>
                        <hr />
                    </div>

                    <div className="prod col-sm" id="geladeira">
                        <img id="imgProd" className="tamanhoprod" src="./img/geladeira.jpg" onmouseover="destaque(this)"
                            onmouseout="redimensiona(this)" />
                        <br />
                        <p> descrição </p>
                        <br />
                        <p className="strike"> R$ preço </p>
                        <br />
                        <p className="preco"> R$ preço </p>
                        <hr />
                    </div>

                    <div className="prod col-sm" id="geladeira">
                        <img id="imgProd" className="tamanhoprod" src="./img/geladeira.jpg" onmouseover="destaque(this)"
                            onmouseout="redimensiona(this)" />
                        <br />
                        <p> descrição </p>
                        <br />
                        <p className="strike"> R$ preço </p>
                        <br />
                        <p className="preco"> R$ preço </p>
                        <hr />
                    </div>

                    <div className="prod col-sm" id="geladeira">
                        <img id="imgProd" className="tamanhoprod" src="./img/geladeira.jpg" onmouseover="destaque(this)"
                            onmouseout="redimensiona(this)" />
                        <br />
                        <p> descrição </p>
                        <br />
                        <p className="strike"> R$ preço </p>
                        <br />
                        <p className="preco"> R$ preço </p>
                        <hr />
                    </div>
                    
                    <br /> <br />
                    <hr />
                    <br /> <br /> <br /> <br />
                </div>
            </div>
            <hr />

        </>
    );
}

export default Produtos;
