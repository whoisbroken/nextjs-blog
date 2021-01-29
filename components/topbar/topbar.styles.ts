import styled from "styled-components";

import { Container } from "../_styled/container";

export const TopBarContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 65px;
`
export const TopBarLogo = styled.div`
  flex-grow: 1;
`;

export const TopBarNav = styled.div`
  flex-grow: 8;
`;

export const TopBarLink = styled.div`
  color: #333;
`;
