import styled from "styled-components";
import { RenderaPalette } from "../../Colors";

const Container = styled.div`
  border: 1px solid ${RenderaPalette.white0};
  border-radius: 20px;
  background-color: ${RenderaPalette.brown400};
  display: flex;
  padding: 20px;
  width: 100%;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%;
  color: ${RenderaPalette.white0};
  font-size: 16px;
  &::placeholder {
    color: ${RenderaPalette.white0};
    opacity: 0.7;
  }
`;

interface InputFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function InputField({ value, onChange }: InputFieldProps) {
  return (
    <Container>
      <StyledInput
        type="text"
        placeholder="Your email address"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
}
