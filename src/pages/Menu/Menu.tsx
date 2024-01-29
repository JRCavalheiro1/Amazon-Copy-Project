import { Container } from "./style";
import { Header } from "./components/Header/Header";
import { Sugestions } from "./components/Sugestions/Sugestions";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, fireStore } from "../../Firebase/firebase-cfg";
import { SugestionsModal} from "./components/Sugestions/SugestionsModal/SugestionsModal";
import { Overlay } from "../../shared/components/Overlay/Overlay";

{/*
    verificar usuário logado
    -criar um ciclo de vida toda vez que iniciar a aplicação    

*/}

export const Menu = ()=> {
    const [nameUser, setNameUser] = useState('');
    const userId = auth.currentUser?.uid;
    
    useEffect(()=> {
        getUserDocument(userId);
    }, [getUserDocument, nameUser])

    async function getUserDocument(id: any) {
            const userDoc = await getDoc(doc(fireStore, 'users', id));
            const userDocName = userDoc.get('name');
            setNameUser(userDocName);
    }

    return (
        <Container>
            <Header name={nameUser}/>
            <Sugestions children={<SugestionsModal/>}/>
            <Overlay/>
            
            {/*Content
                -hero
                -main
                Isso aqui vai ser dificil pra kralho
                */}

            {/*Footer*/}
        </Container>
    )
}