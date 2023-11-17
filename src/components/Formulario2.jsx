import React, {useState} from 'react';
import { View, TextInput, Text, Button } from 'react-native';

export default props => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const login = _=> {
        console.warn(`Email: ${email}  Senha: ${senha}`)
    }

    return (
        <View>
            <TextInput
                style={{borderWidth: 1.0}}
                keyboardType="email-address"
                placeholder='Digite seu E-mail'
                value={email}
                onChangeText={email => setEmail(email)}
            />
            <TextInput
                style={{borderWidth: 1.0}}
                secureTextEntry
                keyboardType="number-pad"
                placeholder='Digite sua senha'
                value={senha}
                onChangeText={senha => setSenha(senha)}
            />
            <Button
                title="Login"
                onPress={login}
            />
            
        </View>
    )
}