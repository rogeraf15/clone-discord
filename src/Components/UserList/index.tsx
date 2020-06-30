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
            <UserRow nickname= "Beltrano" isBot />
            <UserRow nickname= "Fulano 2" />
            <UserRow nickname= "Fulano 4" />
            <UserRow nickname= "Fulano 8" />

            <Role> Offline - 8 </Role>
            <UserRow nickname= "Fulano 1" />
            <UserRow nickname= "Fulano 3" />
            <UserRow nickname= "Fulano 5" />
            <UserRow nickname= "Fulano 6" />
            <UserRow nickname= "Fulano 7" />
            <UserRow nickname= "Fulano 9" />
            <UserRow nickname= "Fulano 10" isBot />
            <UserRow nickname= "Fulano 11" />
        </Container>
    );
};

export default UserList;