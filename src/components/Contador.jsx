import React, {useState} from "react";
import { Text, Button, View } from "react-native";
import Estilos from "../estilos";

export default ({ inicial = 0, passo = 1 }) => {

    const [numero, setNumero] = useState(inicial);
    const [tipoNumero, setTipoNumero] = useState();

    function inc(){
       setNumero(numero + passo);
    }

    function dec(){
        setNumero(numero - passo);
    }

    function verificaNumero(){
        if (numero%2==0){
            setTipoNumero("Par")
        }else{
            setTipoNumero("Impar")
        }
       
    }

    return (
        <>
            <Text style={Estilos.textDois}>
                {numero}
            </Text>

            
            <View style={{flexDirection: "row"}}>
                <Button 
                    title="+"
                    onPress={inc}
                />
                <Button
                    title="-"
                    onPress={dec}
                />
            </View>

            <Button
                title = "Tipo Numérico?"
                onPress={verificaNumero}
            />
            <Text style={Estilos.textTres}>
                {tipoNumero}
            </Text>

        </>
        
    )

}