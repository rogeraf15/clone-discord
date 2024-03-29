import React from 'react';

import ServerButton from '../ServerButton'

import {Container, Separator} from './styles';



const ServerList: React.FC = () =>{
    return (
        <Container>
            <ServerButton isHome />
            
            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />        
            <ServerButton mentions={99} />
            <ServerButton mentions={99} />
            <ServerButton mentions={99} />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton mentions={10} />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    );

};

export default ServerList;