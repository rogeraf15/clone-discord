import  React, {useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, {Mention} from '../ChannelMessage';



const ChannelData: React.FC = () => {
    
    // Para quando recarregar pagina o scroll das mensagens comece para baixo, e nao para cima, como no padrão.
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    useEffect(() => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage
                    author = "Roger Fernandes"
                    date = "29/06/2020"
                    content = "Protótipo do Discord com ReactJS"
                />

                <ChannelMessage
                    author = "Beltrano"
                    date = "29/06/2020"
                    content ={
                        <>
                            <Mention>@Roger Fernandes</Mention>, é muito bom o ReactJS mesmo!
                        </>
                    }
                    hasMention
                    isBot
                />

                <ChannelMessage
                    author = "Fulano 8"
                    date = "29/06/2020"
                    content = "Eu também curto!!"
                />

                <ChannelMessage
                    author = "Fulano 2"
                    date = "29/06/2020"
                    content = "Não sei nada sobre React, mas to aim de aprender!"
                />

                <ChannelMessage
                    author = "Fulano 8"
                    date = "29/06/2020"
                    content ={
                        <>
                            <Mention>@Fulano 2</Mention>, também sou novo, mas to curtindo muito!
                        </>
                    }
                    hasMention
                    isBot
                />

                <ChannelMessage
                    author = "Fulano 4"
                    date = "29/06/2020"
                    content = "Aqui estou mais um dia!"
                />

                <ChannelMessage
                    author = "Fulano 2"
                    date = "29/06/2020"
                    content = "Sob o olhar sanguinário do vigia!"
                />

                <ChannelMessage
                    author = "Fulano 8"
                    date = "29/06/2020"
                    content = "Você não sabe como é caminhar com a cabeça na mira de uma HK"
                />

                <ChannelMessage
                    author = "Fulano 4"
                    date = "29/06/2020"
                    content = "Metralhadora alemã ou de Israel"
                />

                <ChannelMessage
                    author = "Fulano 2"
                    date = "29/06/2020"
                    content = "Estraçalha ladrão que nem papel"
                />

                
            </Messages>
            
            <InputWrapper>
                <Input type= "text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;