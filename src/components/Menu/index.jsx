import React from 'react';
import './styles.css';

const Menu = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
                <a className="navbar-brand" href="/">
                    <img src="./img/logotitle.svg" alt="logo FullStack" title="Página Inicial" />
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
                    <span className="navbar-toggler-icon "></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"  title="Página de produtos" href="../Produtos">Produtos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" title="Nossas lojas" href="../Lojas">Nossas Lojas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" title="Fale conosco" href="../Contato">Contato</a>
                        </li>
                    </ul>

                    <form className="form-inline ml-5 my-2 my-lg-4" id="pesquisa">
                        <input className="form-control mr-sm-0" type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
                        <button className="botao-nav btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                    </form>

                </div>
            </nav>
        </>

    );
}

export default Menu;