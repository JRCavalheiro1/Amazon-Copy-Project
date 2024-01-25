import { Button } from "../../../../../../shared/components/Index" 
import { Link } from "react-router-dom"
import { CSSProperties } from "react";
import { Container } from "./style";

type modalProps = {
    style?: CSSProperties | undefined;
}

export const UserModal = ({style}: modalProps) => {
    return (
        <Container>
            <div className="triangle-modal" style={style}>
                <div className="arrow-up"></div>
                <div className="modal">

                    <div className="modal-content">
                        <Button
                            type="button"
                            children="Faça seu Login"
                            style={{width: `21.8rem`}}
                        />
                            <p>Cliente novo?</p> <Link to="/signup"><a>Comece aqui</a></Link>
                            <hr className="horizontal-line"/>

                            <div className="account-pref">
                                <div className="list">
                                    <h2>Suas Listas</h2>
                                    <a className="link-modal">Criar uma Lista de desejos</a>
                                </div>

                                <div>
                                    <hr className="vertical-line"/>
                                </div>

                                <div className="list-tools">
                                    <h2>Sua Conta</h2>
                                    <ul>
                                        <li><a href="#" className="link-modal">Sua conta</a></li>
                                        <li><a href="#" className="link-modal">Seus pedidos</a></li>
                                        <li><a href="#" className="link-modal">Sua Lista de desejos</a></li>
                                        <li><a href="#" className="link-modal">Recomendados para você</a></li>
                                        <li><a href="#" className="link-modal">Programe e Poupe</a></li>
                                        <li><a href="#" className="link-modal">Sua assinatura Prime</a></li>
                                        <li><a href="#" className="link-modal">Incrições e assinaturas</a></li>
                                        <li><a href="#" className="link-modal">Gerencie seu conteúdo e <br/>dispositivos</a></li>
                                        <li><a href="#" className="link-modal">Seu Prime Video</a></li>
                                        <li><a href="#" className="link-modal">Seu Kindle Unlimited</a></li>
                                        <li><a href="#" className="link-modal">Seu Amazon Drive em <br/>Amazon.com</a></li>
                                        <li><a href="#" className="link-modal">Seus aplicativos e dispositivos</a></li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            </Container>
    )
}