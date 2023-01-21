import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(0deg, #19ddf3, #111111, #f69d3c);

  /* робимо фон на всю ширину */
  width: 100%;
  height: 700px;
`;
