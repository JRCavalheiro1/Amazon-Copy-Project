import * as Yup from "yup";

export const  validationSchema = Yup.object({
    name: Yup.string()
      .strict(true)
      .required("Insira seu nome"),
    email: Yup.string()
      .strict(true)
      .email("Digite seu e-mail ou número de telefone celular")
      .required("Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.")||
      Yup.number()
      .strict(true)
      .min(10, "Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.")
      .required("Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente."),
    password: Yup.string()
      .strict(true)
      .min(6, "Mínimo de 6 caracteres necessários")
      .required("Mínimo de 6 caracteres necessários"),
    confirmPassword: Yup.string()
      .strict(true)
      .min(6)
      .required("Mínimo de 6 caracteres necessários")
});

export const validationSigninSchema = Yup.object({
  email: Yup.string()
    .strict(true)
    .email("Digite seu e-mail ou número de telefone")
    .required("Digite seu e-mail ou número de telefone")
})

export const validationCepSchema = Yup.object({
  name: Yup.string()
    .strict(true)
    .required("Insira um CEP válido")
})