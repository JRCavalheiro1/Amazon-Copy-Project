import { Container } from "./style"

import { Button } from "../../../../../../shared/components/Index" 
import { Link } from "react-router-dom"
export const UserModal = () => {
    return (
            <div className="triangle-modal">
                <div className="arrow-up"></div>
                <div className="modal">

                    <div className="modal-content">
                        <Button
                            type="button"
                            children="Faça seu Login"
                            style={{width: `21.8rem`}}
                        />
                        <div className="link">
                            <p>Cliente novo?</p> <a> <Link to="/signup">Comeque aqui</Link></a>
                        </div>
                    </div>
                </div>
            </div>
    )
}