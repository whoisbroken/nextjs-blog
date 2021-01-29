import React from "react";
import Link from "next/link";

import {
  TopBarStyles, TopBarContainer, TopBarLogo,
  TopBarNav
} from "./topbar.styles";

const TopBar = () => {
  return (
    <TopBarStyles>
      <TopBarContainer>
        <TopBarLogo>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </TopBarLogo>
        <TopBarNav>
          <Link href="/posts/new">
            New post
          </Link>
        </TopBarNav>
      </TopBarContainer>
    </TopBarStyles>
  );
};

export default TopBar;