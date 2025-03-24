import styled from "styled-components";
import { RenderaPalette } from "../../Colors";

const Container = styled.div`
  border: 1px solid ${RenderaPalette.white0};
  border-radius: 20px;
  background-color: ${RenderaPalette.brown400};
  padding: 20px 30px 18px 30px;
  display: flex;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  color: ${RenderaPalette.white0};
  font-size: 16px;
  &::placeholder {
    color: ${RenderaPalette.white0};
    opacity: 0.7;
  }
`;

export default function InputField() {
  return (
    <Container>
      <StyledInput type="text" placeholder="Your email address" />
    </Container>
  );
}
