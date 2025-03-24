import styled from "styled-components";
import { RenderaPalette } from "../../Colors";

const CardContainer = styled("div")`
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: ${RenderaPalette.beige200};
`;
const ImageContainer = styled("div")`
  border-radius: 20px;
`;
export default function Card() {
  return <CardContainer></CardContainer>;
}
