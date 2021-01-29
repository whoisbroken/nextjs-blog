import styled from "styled-components";

import { Container } from "../_styled/container";

export const TopBarStyles = styled.div`
  background-color: ${({ theme }) => theme.palette.grey};
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey};
`;

export const TopBarContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 65px;
`;

export const TopBarLogo = styled.div`
  flex-grow: 1;
`;

export const TopBarNav = styled.div`
  flex-grow: 8;
`;

