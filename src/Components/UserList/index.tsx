import  React from 'react';

import { Container, Role, User, Avatar} from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
};

const UserRow: React.FC<UserProps> = ({ nickname, isBot}) => {
    return(
        <User>
            <Avatar className={isBot ? 'bot':''}/>

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    );
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível - 1 </Role>
            <UserRow nickname="Roger Fernandes" />

            <Role> Offline - 8 </Role>
            <UserRow nickname= "Beltrano" isBot />
            <UserRow nickname= "Fulano1" />
            <UserRow nickname= "Fulano2" />
            <UserRow nickname= "Fulano3" />
            <UserRow nickname= "Fulano4" />
            <UserRow nickname= "Fulano5" />
            <UserRow nickname= "Fulano6" />
            <UserRow nickname= "Fulano7" />
            <UserRow nickname= "Fulano8" />
            <UserRow nickname= "Fulano9" />
            <UserRow nickname= "Fulano10" isBot />
            <UserRow nickname= "Fulano11" />
        </Container>
    );
};

export default UserList;