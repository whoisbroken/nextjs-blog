import React from "react";
import Link from "next/link";

import { TopBarContainer,TopBarLogo,
        TopBarNav, TopBarLink } from "./topbar.styles";

const TopBar = () => {
  return (
      <TopBarContainer>
        <TopBarLogo>
          <Link href="/">
            Blog
          </Link>
        </TopBarLogo>
        <TopBarNav>
          <TopBarLink>
            <Link href="/posts/new">
              New post
            </Link>
          </TopBarLink>
        </TopBarNav>
      </TopBarContainer>
  );
};

export default TopBar;