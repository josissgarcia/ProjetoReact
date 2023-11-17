import { Text } from "react-native";
import Estilos from "./Estilos";
import { Component } from "react";

export default ({min,max}) =>{
    
    const delta = max - min
    const aleatorio = parseInt(Math.random() * delta) + min

    return (
        <Text style = {Estilos.text}> O valor aleatorio é: {aleatorio}</Text>
        );
}

