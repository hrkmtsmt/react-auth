import React from "react";
type Props = {
  link: string;
  cta: string;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

export const ButtonPrimary = (props: Props) => {
  return (
    <button className={"c-button-primary"} onClick={props.onClick}>
      {props.cta}
    </button>
  );
};

export const ButtonDanger = (props: Props) => {
  return (
    <button className={"c-button-danger"} onClick={props.onClick}>
      {props.cta}
    </button>
  );
};
export const ButtonBorder = (props: Props) => {
  return (
    <button className={"c-button-border"} onClick={props.onClick}>
      {props.cta}
    </button>
  );
};

export const LinkButton = (props: Props) => {
  return (
    <a className={"c-link-button"} href={props.link}>
      {props.cta}
    </a>
  );
};

export const LinkButtonBorder = (props: Props) => {
  return (
    <a className={"c-link-button-border"} href={props.link}>
      {props.cta}
    </a>
  );
};
