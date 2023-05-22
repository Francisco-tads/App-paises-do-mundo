import { Container, Titulo, Tema } from "./styled";
export default function Header({ mudarTemaFuncao }) {
  return (
    <Container>
      <Titulo>Qual é o País ?</Titulo>
      <Tema onClick={() => mudarTemaFuncao()}> 🌙 Tema Escuro </Tema>
    </Container>
  );
}
