import { Text } from "react-native";
import Estilos from "./Estilos";

export default ({x, y}) => {
    
let msg;
    
    if (x == y){
        msg = `${x} e ${y} são iguais`
    }else if (x > y){
        msg = `${x} é maior que ${y}`
    }else{
        msg = `${y} é maior que ${x}`
    }

    return <Text style = {Estilos.text}>{msg}</Text>;
}
