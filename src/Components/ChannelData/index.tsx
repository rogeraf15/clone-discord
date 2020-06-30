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
            </Messages>
            
            <InputWrapper>
                <Input type= "text" placeholder="Conversar em #chat-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;