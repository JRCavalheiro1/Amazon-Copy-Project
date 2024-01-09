import React, { useState } from "react";
import ReactDOM  from "react";

//import of components and styles
import { ContainerForm } from "./style"
import { Alert, Alert2 } from "../../../../shared/components/Alert/Alert";
import { validationSchema } from "../../Validation";
import { Input } from "../../../../shared/components/Input/Input";
import { Button } from "../../../../shared/components/Button/Button";

//import of validation, firebase & other methods
import { useFormik} from "formik";
import { auth } from "../../../../Firebase/firebase-cfg";
import { fireStore } from "../../../../Firebase/firebase-cfg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, doc} from "firebase/firestore";

import { useNavigate, Link } from "react-router-dom";

interface ownProps {}

interface formValues {
    name: string,
    email: string ,
    password: string,
    confirmPassword: string,
}
const initialValues: formValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

export const Form = () => {
    const navigate = useNavigate();

    const usersCollection = collection(fireStore, "/users");

    async function newUserDocument(userValue : formValues) {
        const newDoc = await addDoc(usersCollection, {
            name: userValue.name,
            email: userValue.email
        })
        console.log("Document has been created "+ newDoc.path);
    };

    const onSubmit = (values : formValues) => {
        if(password == confirmPassword) {
            createUserWithEmailAndPassword(auth, values.email, values.password)
            .then( (userCredential) => {
                const userId = userCredential.user.uid;
                newUserDocument(values);

                console.log("Dados do usuário cadastrado" + userCredential.user)
                navigate("/signin");
            })
            .catch((error)=> {
                console.log(error);
            })
            
        } else {
            console.log("senhas não são iguais")
        }
    }

    const formik = useFormik<formValues>({
        validationSchema,
        initialValues,
        onSubmit    
    });

    const password = formik.values.password;
    const confirmPassword = formik.values.confirmPassword;
    
    
    return (
        <ContainerForm>
                    
                    <form onSubmit={formik.handleSubmit}>
                        <h1>Criar conta</h1>

                        <Input
                            label={"Seu nome"}
                            placeholder={"Nome e sobrenome"}
                            type={"text"}
                            name={"name"}
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            style={{border: formik.errors.name && formik.touched.name ? "2px solid #CC0C39" : undefined}}
                        />
                        {formik.errors.name && formik.touched.name && <Alert2 message={formik.errors.name}/>}
                        
                        <Input
                            label={"Número de celular ou e-mail"}
                            type={"text"}
                            name={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            style={{border: formik.errors.email && formik.touched.email ? "2px solid #CC0C39" : undefined}}
                        />
                        {formik.errors.email && formik.touched.email && <Alert2 message={formik.errors.email}/>}

                        <Input
                            label={"Senha"}
                            placeholder={"Pelo menos 6 caracteres"}
                            type={"password"}
                            name={"password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            style={{border: formik.errors.password && formik.touched.password ? "2px solid #CC0C39" : undefined}}
                        />
                        {formik.errors.password && formik.touched.password && <Alert2 message={formik.errors.password}/> || <Alert/>}    

                       <Input
                            label={"Insira a senha nova mais uma vez"}
                            type={"password"}
                            name={"confirmPassword"}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            style={{border: formik.errors.confirmPassword && formik.touched.confirmPassword ? "2px solid #CC0C39" : undefined}}
                        />
                        {confirmPassword != password && <Alert2 message="As senhas não são iguais"/>}
                        { formik.errors.confirmPassword && formik.touched.confirmPassword && <Alert2 message={formik.errors.confirmPassword}/>}
                        
                        <Button 
                            type={"submit"}
                        >
                            Continuar
                        </Button>

                    </form>
           
        </ContainerForm>
    )
}
