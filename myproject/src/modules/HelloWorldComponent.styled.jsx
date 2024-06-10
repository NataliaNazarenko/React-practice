import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: purple;
`;

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-align: center;
  color: ${props => props.primary || "blue"};
  background-color: ${props => props.state ? "grey" : "green"};
`;
