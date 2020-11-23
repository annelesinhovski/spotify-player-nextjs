import React from "react";
import Link from "next/link";
import { WrapperPage, Logo } from "./style";

function Page({ children }) {
  return (
    <WrapperPage>
      <Link href="/dashboard">
        <a>
          <Logo color="white" />
        </a>
      </Link>
      {children}
    </WrapperPage>
  );
}

export default Page;
