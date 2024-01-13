import { Container } from "./styles";
import menuIcon from "../../../../images/menuIcon.svg";
export const Sugestions = () => {
    return (
        <Container>
            <div className="nav-sugestions">
                <div className="all-sugestions-btn">
                    <img src={menuIcon}/> <a>Todos</a>
                </div>

                <div className="nav-sugestions-bar">
                    <ul>
                        <li><a>Venda na Amazon</a></li>
                        <li><a>Mais Vendidos</a></li>
                        <li><a>Ofertas do Dia</a></li>
                        <li><a>Prime</a></li>
                        <li><a>Livros</a></li>
                        <li><a>Ideias de Presente</a></li>
                        <li><a>Música</a></li>
                        <li><a>Novidades na Amazon</a></li>
                        <li><a>Eletrônicos</a></li>
                        <li><a>Computadores</a></li>
                        <li><a>Histórico de Navegação</a></li>
                        <li><a>Casa</a></li>
                        <li><a>Games</a></li>
                        <li><a>Beleza</a></li>
                    </ul>
                </div>
            </div>

        </Container>
    )
}