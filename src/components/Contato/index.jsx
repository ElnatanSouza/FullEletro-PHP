import React from 'react';
import Produtos from '../Produtos';

import './styles.css';

const Contato = () => {
    const [comentario, setComentario] = React.useState([])

    React.useEffect(async () => {
        const url = "http://localhost/fullstack_eletro/src/backend/coment.php"
        const response = await fetch(url);
        setComentario(await response.json());
    }, [])
    return (
        <>
            <div className="container-fluid">
                <br /> <br />

                <p id="faleConos"> Fale Conosco </p>
                <table className="lojas text-center my-0">
                    <tbody>
                        <tr>
                            <td>
                                <img src="./img/whats.png" alt="Logo WhatsApp" title="Imagem WhatsApp" id="logoContato" />
                                (11)
                                98887-9788 | | (11) 95293-5270
                            </td>
                            <td>
                                <img src="./img/email.png" alt="Logo Email" title="Imagem Email" id="logoContato" />
                                contato@fullstackeletro.com.br || vendas@fullstackeletro.com
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br /><br /><br />

                <form className="form-group" method="post" action="#">

                    <h4 className="contato">
                        Nome Completo: <br />
                        <input id="fale_form" className="nome form-control" type="text" name="nome" placeholder="Digite aqui seu nome" />
                        <br /> Email:
                        <br />
                        <input id="fale_form" className="email form-control" type="email" name="email" placeholder="Digite aqui seu email" />
                        <br />
                    </h4>

                    <h4 className="mensagem">
                        Mensagem: <br />
                        <textarea id="text_form" className="textarea form-control" name="msg" placeholder="Digite sua mensagem aqui"></textarea> <br />

                        <input id="fale_botao" className="botao btn text-light" type="submit" value="Enviar" /> <br />
                    </h4>

                </form>

                <div className="col">
                    {comentario.map(element => {
                        return (
                            <div key={element.id} className="card mt-5 shadow w-50">
                                <p> <b>Data: </b>{element.dia}</p> <br/>
                                <p><b>Nome:</b> {element.nome} </p>
                                <p><b>Email:</b> {element.email} </p>
                                <p><b>Comentário:</b> {element.msg} </p>
                            </div>
                        )
                    })} 
                </div>
                
                <br /> <br /> <br /> <br />
                <hr />
                <br /> <br /> <br /> <br />

            </div>

        </>

    );  
}   

export default Contato;