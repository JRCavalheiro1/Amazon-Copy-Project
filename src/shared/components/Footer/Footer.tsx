import { ContainerFooter } from './style';

export const Footer = () => {
    return (
        <ContainerFooter>
            <footer>
                <hr className='line2'/>
                <ul>
                        <li><a href='#'>Condições de Uso</a> </li>
                        <li><a href='#'>Política de Privacidade</a></li>
                        <li><a href='#'>Ajuda</a></li>
                        <li><a href='#'>Cookies</a></li>
                        <li><a href='#'>Anúncio Baseados em Interesses</a></li>
                    </ul>

                    <p>© 2021-2023 Amazon.com, Inc. ou suas afiliadas</p> 
            </footer>
        </ContainerFooter>
    )
}