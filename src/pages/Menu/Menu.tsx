import { Container } from "./style";
import { Header } from "./components/Header/Header";

import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, fireStore } from "../../Firebase/firebase-cfg";



export const Menu = ()=> {
    const [nameUser, setNameUser] = useState('');

    useEffect(()=> {
        const userId = auth.currentUser?.uid;
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
            
            {/*Header
                -logo
                -local
                -search
                -user
                -ordered
                -cart
            */}

            {/*Content
                -hero
                -main
                Isso aqui vai ser dificil pra kralho
                */}

            {/*Footer*/}
        </Container>
    )
}