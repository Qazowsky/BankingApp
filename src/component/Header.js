import styled from "styled-components";

export default function Header({ name, onClick }) {
  return (
    <HeaderTag>
      <Nametag>{name}</Nametag>
      <LoginButtonTag onClick={onClick}>Вхід</LoginButtonTag>
    </HeaderTag>
  );
}

const LoginButtonTag = styled.div`
  color: #e6a638;

  padding: 8px 32px;

  border: 2px solid #e6a638;

  border-radius: 15px;

  cursor: pointer;
`;

const Nametag = styled.div`
  color: #e6a638;
`;

const HeaderTag = styled.div`
  /* робимо темний колір фону блока */
  background: #1e1e1e;

  /* робимо щоб знизу блок мав закруглення */
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* режим верстки flex, робимо текст по центру */
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* ставимо колір тексту білим */
  color: #f69d3c;

  /* робимо відступи вертикальні та горизонтальні,
    щоб текст не притискався до країв блоку
   */
  padding: 20px;
`;
