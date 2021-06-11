import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { HeaderLogin } from "../../components/HeaderLogin";
import { ButtonGoogle, Container, ContainerLogin } from "./style";


export function SingInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleSubmitLogin() {

    }

    return (
        <Container>
            <HeaderLogin />
            <ContainerLogin>
                <h2>Entrar</h2>
                <ButtonGoogle>
                    <FcGoogle />
                    <span>Google</span>
                </ButtonGoogle>
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}

                />
                <button type="submit">Entrar</button>

            </ContainerLogin>
        </ Container>
    )
}