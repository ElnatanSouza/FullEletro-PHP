import React from 'react';

import './styles.css';

const Produtos = () => {
    const [produto, setProduto] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const url = "http://localhost/fullstack_eletro/src/backend/prod.php";
            const response = await fetch(url);
            setProduto(await response.json());
        } fetchData();
    }, [])

    // setCat(produto.filter((element, i) => element.indexOf(i) === i));
    // console.log(produto.filter((element, index) => element.indexOf(element.categoria) === index))


    // var arr = [{nome: "Gui"}, {nome: "Gui"}, {nome: "Elnatan"}];
    // var novaArr = arr.filter((este, i) => arr.indexOf(este) === i);
    // console.log(novaArr); //dá ['foo', 'bar']

    // var original = [{a:1}, {a:1}, {a:2}, {a:3}, {a:1}, {a:2}, {a:5}];
    //removing duplicates values from container



    const destaque = (event) => {
        if (event.target.style.width === "260px") {
            event.target.style.width = "120px";
        }
        else {
            event.target.style.width = "260px";
        }
    }

    const redimensiona = (event) => {
        if (event.target.style.width === "120px") {
            event.target.style.width = "260px";
        }
        else {
            event.target.style.width = "120px";
        }
    }

    let produt = document.getElementsByClassName('prod');

    const exibir = (event) => {
        let item = event.target.id;
        for (let i = 0; i < produt.length; i++) {
            if (item === produt[i].id) {
                produt[i].style.display = "inline-block";
            } else {
                produt[i].style.display = "none";
            }
        }
    }

    const exibirTodos = () => {
        for (let i = 0; i < produt.length; i++) {
            produt[i].style.display = "inline-block";
        }
    }

    return (
        <>
            <div className="container-fluid mt-5 row">
                <aside className="col-lg-3 col-sm-3">
                    <p className="paragrafoCateg"> Categorias </p>
                    <br />
                    <ul className="lista navbar-nav ml-auto">
                        <li className="nav-item" onClick={exibirTodos}> <b> Todos </b> </li>

                        {produto.map(categoria => {
                            return (
                                <li key={categoria.id_produto} id={categoria.id_categoria} className="nav-item" onClick={exibir}> {categoria.categoria} </li>
                            )
                        })}
                    </ul>
                </aside>

                <div className="col-lg-9 col-sm-9">
                    <div className="row">
                        {produto.map(element => {
                            return (
                                <div key={element.id_produto} className="prod card border-0 col-lg-3 col-sm-3" id={element.id_categoria} >
                                    <img id="imgProd" className="tamanhoprod border-0 img-thumbnail" alt={""} src={'/img/' + element.imagem} onMouseOver={destaque}
                                        onMouseOut={redimensiona} />
                                    <br />
                                    <p className="card-text"> {element.descricao_produto + " " + element.marca} </p>
                                    <br />
                                    <p className="strike"> R$ {element.preco_real}  </p>
                                    <br />
                                    <p className="preco"> R$ {element.preco_desc}  </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />
            </div>
            <hr />
        </>
    );
}

export default Produtos;
