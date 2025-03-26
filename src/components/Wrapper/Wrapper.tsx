import styled from "styled-components";

export const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 80px;
  max-width: 1200px;
  padding: 120px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
    max-width: unset;
    gap: 24px;
  }
`;
