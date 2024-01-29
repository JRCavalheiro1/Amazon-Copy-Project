import { Container } from "./style";
import userIconModal from "../../../../../images/userModalicon.svg";
import closeIconModal from "../../../../../images/closeModalicon.svg"
export const SugestionsModal = () => {
    return (
        <Container>
            <div className="sugest-close-modal">
                <img src={closeIconModal}/>
            </div>

            <div className="nav-sugest-modal">
                <div className="sugest-modal-name">
                    <img src={userIconModal}/> <a>Olá faça seu login</a> 
                </div>
                
                <div className="nav-modal-content">
                    
                    <div className="content c-emphasis">
                        
                    </div>
                    
                    <div className="content c-digital">
                    </div>

                    <div className="content c-category"></div>

                    <div className="content c-resource"></div>

                    <div className="content c-help"></div>

                </div>
            </div>
            
        </Container>
    )
}