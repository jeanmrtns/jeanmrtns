import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Container, ErrorText } from "../styles/Contact";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required('O nome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('O e-mail é obrigatório'),
  message: yup.string().required('Você deve deixar sua mensagem')
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  async function handleEmailSubmit(form) {
    console.log(form);
  }

  return (
    <main className="container">
      <Container>
        <h1>Entre em contato comigo</h1>

        <label htmlFor="name">Nome:</label>
        <input type="text" id="name"  {...register('name')} />
        {errors.name && <ErrorText>{errors.name.message}</ErrorText>}

        <label htmlFor="email" >Email:</label>
        <input type="email" id="email" {...register('email')}/>
        {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

        <label htmlFor="message" >Insira sua mensagem:</label>
        <textarea id="message" {...register('message')}></textarea>
        {errors.message && <ErrorText>{errors.message.message}</ErrorText>}

        <button onClick={handleSubmit(handleEmailSubmit)}>Enviar</button>
      </Container>
    </main>
  )
}