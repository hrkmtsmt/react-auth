import React from "react";
type Props = {
  children: React.ReactNode;
};
export const Box = (props: Props) => {
  return <div className={"c-box"}>{props.children}</div>;
};
