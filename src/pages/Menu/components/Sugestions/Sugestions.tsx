import menuIcon from "../../../../images/menuIcon.svg";
import { Container } from "./styles";
import { CloseModal } from "./SugestionsModal/CloseModal/CloseModal";
import { useState } from "react";
import { Overlay } from "../../../../shared/components/Overlay/Overlay";
import { SugestionsModal } from "./SugestionsModal/SugestionsModal";
import { useEffect } from "react";


type sugestionProps = {
    name: string
 }

export const Sugestions = ({name }: sugestionProps) => {
    const [openModal, setOpenModal] = useState(true);
    
    useEffect(()=> {
        setOpenModal(false);
    }, [setOpenModal])
    return (
        <Container>
            <div className="nav-sugestions">
                <div className="nav-sugestions-bar">
                    <div className="all-sugestions-btn" onClick={()=> setOpenModal(!openModal)}>
                        <img src={menuIcon}/> <a>Todos</a>
                    </div>
                    <ul className="list-body">
                        <li className="list-sugest"><a>Venda na Amazon</a></li>
                        <li className="list-sugest"><a>Mais Vendidos</a></li>
                        <li className="list-sugest"><a>Ofertas do Dia</a></li>
                        <li className="list-sugest"><a>Prime</a></li>
                        <li className="list-sugest"><a>Livros</a></li>
                        <li className="list-sugest"><a>Ideias de Presente</a></li>
                        <li className="list-sugest"><a>Música</a></li>
                        <li className="list-sugest"><a>Novidades na Amazon</a></li>
                        <li className="list-sugest"><a>Eletrônicos</a></li>
                        <li className="list-sugest"><a>Computadores</a></li>
                        <li className="list-sugest"><a>Casa</a></li>
                        <li className="list-sugest"><a>Games</a></li>
                        <li className="list-sugest"><a>Beleza</a></li>
                    </ul>
                </div>

                <div className="nav-sugest-title">
                    <a><h1>Tudo para lista escolar</h1></a>   
                </div>
            </div>

            {openModal && <SugestionsModal key={name} name={name} isOpen={openModal} onClick={()=> setOpenModal(!openModal)}/>}
            {openModal && <Overlay onClick={()=> setOpenModal(!openModal)}/>} 
        </Container>
    
    )
}