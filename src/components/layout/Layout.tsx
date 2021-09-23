import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Main } from "../layout/Main";
type Props = {
  children: React.ReactNode;
};
export const Layout = (props: Props) => {
  return (
    <React.Fragment>
      <Header />
      <Main>{props.children}</Main>
      <Footer />
    </React.Fragment>
  );
};
