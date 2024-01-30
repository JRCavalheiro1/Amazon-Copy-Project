import { Container } from "./style";
import userIconModal from "../../../../../images/userModalicon.svg";

import { motion } from "framer-motion";

type modalProps = {
    name: string,
    isOpen: boolean
}
const variants = {
    open: {x: 0},
    closed: {x: "-100%"}
}
export const SugestionsModal = ({name, isOpen} : modalProps) => {
    return (
        <motion.nav
        animate= {isOpen ? "open" : "closed"}
        transition={{duration: 0.6}}
        variants={variants}
        
        >   
        <Container>
            <div className="nav-sugest-modal">
                <div className="sugest-modal-name">
                    <img src={userIconModal}/> <a>{name ? name : "Olá, faça seu login"}</a>
                </div>
                
                <div className="nav-modal-content">
                    <div className="content c-emphasis">
                        <h3>Destaques</h3>
                        <ul className="list-modal-body">
                            <li  className="list-modal-sugest">Mais Vendidos</li>
                            <li  className="list-modal-sugest">Novidades na Amazon</li>
                            <li  className="list-modal-sugest">Produtos em alta</li>
                        </ul>
                    </div>

                    <div className="horizontal-line"></div>

                    <div className="content c-digital">
                        <h3>Conteúdo digital e dispositivos</h3>
                        <ul className="list-modal-body">
                            <li  className="list-modal-sugest">Amazon Fire TV</li>
                            <li  className="list-modal-sugest">Amazon Music</li>
                            <li  className="list-modal-sugest">Prime Video</li>
                            <li  className="list-modal-sugest">Aplicativos Amazon</li>
                            <li  className="list-modal-sugest">Dispositivos Kindle e eBooks</li>
                            <li  className="list-modal-sugest">Echo e Alexa</li>
                            <li  className="list-modal-sugest">Audiolivros Audible</li>
                        </ul>
                    </div>

                    <div className="horizontal-line"></div>


                    <div className="content c-category">
                        <h3>Comprar por categoria</h3>
                        <ul className="list-modal-body">
                            <li  className="list-modal-sugest">Alimentos e Bebidas</li>
                            <li  className="list-modal-sugest">Automotivo</li>
                            <li  className="list-modal-sugest">Bebês</li>
                            <li  className="list-modal-sugest">Beleza e Cuidados Pessoais</li>
                            <li  className="list-modal-sugest">Ver tudo</li>
                        </ul>
                    </div>

                    <div className="horizontal-line"></div>


                    <div className="content c-resource">
                        <h3>PROGRAMAS E RECURSOS</h3>
                        <ul className="list-modal-body">
                            <li  className="list-modal-sugest">Amazon Prime</li>
                            <li  className="list-modal-sugest">Mais por Menos</li>
                            <li  className="list-modal-sugest">Dicas de Presentes</li>
                            <li  className="list-modal-sugest">Lista do Bebê</li>
                            <li  className="list-modal-sugest">Ver tudo</li>
                        </ul>
                    </div>

                    <div className="horizontal-line"></div>


                    <div className="content c-help">
                        <h3>AJUDA E CONFIGURAÇÕES</h3>
                        <ul className="list-modal-body">
                            <li  className="list-modal-sugest">Sua conta</li>
                            <li  className="list-modal-sugest">Ajuda</li>
                            <li  className="list-modal-sugest">Faça seu login</li>
                        </ul>
                    </div>

                </div>
            </div>
        </Container>
        </motion.nav>
    )
}