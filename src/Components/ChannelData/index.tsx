import  React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'
import ChannelMessage, {Mention} from '../ChannelMessage';



const ChannelData: React.FC = () => {

    return (
        <Container>
            <Messages>
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