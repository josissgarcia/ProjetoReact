import Primeiro from "./src/components/Primeiro";
import PrimeiroProps from "./src/components/PrimeiroProps";
import { View } from "react-native";
import Estilos from "./src/components/Estilos";
import { Group1, Group2 } from "./src/components/Multi";
import Aleatorio from "./src/components/Aleatorio";
import MaxMin from "./src/components/MaxMin";
import Botao from "./componentes/Botao";
import Contador from "./componentes/Contador";
import ListaProduto from "./componentes/ListaProduto";
import ListaProduto2 from "./componentes/ListaProduto2";
import ListaProdutoSection from "./componentes/ListaProdutoSection";
import Formulario from "./componentes/Formulario";
import Formulario2 from "./src/components/Formulario2";

export default function App() {
  return (

      <View style = {Estilos.view}>
        {/* <Aleatorio min={7} max = {99}/>
        <Aleatorio min={7} max = {99}/>
        <Aleatorio min={7} max = {99}/>
        <Primeiro/>
        <PrimeiroProps/>
        <Group1/>
        <Group2/>
        <MaxMin x={10} y={9}/>
        <MaxMin x={1} y={90}/>
        <MaxMin x={2} y={2}/>
        <Botao/>
        <Contador/>
        <ListaProduto/>
        <ListaProduto2/>
        <ListaProdutoSection/> 
        <Formulario/>*/}

        <Formulario2/>
      </View>

  );
}

