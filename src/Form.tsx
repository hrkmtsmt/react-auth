import React from "react";
type Props = {
  id: string;
  label: string;
  type: string;
  cta: string;
  placeholder?: string;
  children?: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  action?: string;
};
export const Form = (props: Props) => {
  return (
    <form className={"c-form"} action={props.action} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
};
export const FormGroup = (props: Props) => {
  return <div className={"c-form-group"}>{props.children}</div>;
};
export const FormLabel = (props: Props) => {
  return (
    <label htmlFor={props.id} className={"c-form-label"}>
      {props.label}
    </label>
  );
};
export const FormInput = (props: Props) => {
  return (
    <input
      id={props.id}
      name={props.id}
      type={props.type}
      placeholder={props.placeholder}
      className={"c-form-input"}
    />
  );
};
export const FormButton = (props: Props) => {
  return (
    <button onClick={props.onClick} className={"c-form-button-primary"}>
      {props.cta}
    </button>
  );
};
