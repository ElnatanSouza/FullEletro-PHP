import React from 'react';

import './styles.css';

const Contato = () => {
    const [comentario, setComentario] = React.useState([])
    const [render, setRender] = React.useState(false);
    const [msg, setMsg] = React.useState(false)

    React.useEffect(() => {
        async function fetchData() {
            const url = "http://localhost/fullstack_eletro/backend/coment.php";
            const response = await fetch(url);
            setComentario(await response.json());
        }
        fetchData();
    }, [render])

    function registerCommment(event) {
        event.preventDefault();
        const url = "http://localhost/fullstack_eletro/backend/register-comment.php";

        fetch(url, {
            method: "POST",
            body: new FormData(event.target)
        }).then((response) => response.json())
            .then((dados) => {
                setRender(!render);
                setMsg(dados);
                setTimeout(() => {
                    setMsg(false)
                }, 3000);
            })
    }

    return (
        <>
            <div className="container-fluid mt-5">
                <p className="mb-4" id="faleConos"> Fale Conosco </p>
                <div className="lojas text-center mb-5">
                    <img src="./img/whats.png" alt="Logo WhatsApp" title="Imagem WhatsApp" id="logoContato" />
                        (11) 98887-9788 | | (11) 95293-5270
                    <img src="./img/email.png" alt="Logo Email" title="Imagem Email" id="logoContato" />
                        contato@fullstackeletro.com.br || vendas@fullstackeletro.com
                </div>
                <form className="form-group" onSubmit={registerCommment}>

                    <h4 className="contato">
                        Nome Completo:
                        <input id="fale_form" className="nome form-control mt-2 mb-3" type="text" name="nome" placeholder="Digite aqui seu nome" />
                        Email:
                        <input id="fale_form" className="email form-control mt-2 mb-3" type="email" name="email" placeholder="Digite aqui seu email" />
                    </h4>
                    <h4 className="mensagem">
                        Mensagem:
                        <textarea id="text_form" className="textarea form-control mt-2" name="msg" placeholder="Digite sua mensagem aqui"></textarea>
                        <input id="fale_botao" className="botao btn text-light mt-2 mb-3" type="submit" value="Enviar" />
                    </h4>

                </form>
                {msg &&
                    <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
                        Comentário efetuado com sucesso!
                    </div>
                }

                <div className="col">
                    {comentario.map(element => {
                        return (
                            <div key={element.id} className="card mt-5 shadow w-50">
                                <p> <b>Data: </b>{element.dia}</p> <br />
                                <p><b>Nome:</b> {element.nome} </p>
                                <p><b>Email:</b> {element.email} </p>
                                <p><b>Comentário:</b> {element.msg} </p>
                            </div>
                        )
                    })}
                </div>
                <hr className="mt-5 mb-5" />
            </div>
        </>

    );
}

export default Contato;