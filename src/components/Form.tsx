import React from "react";
type Props = {
  id: string;
  title: string;
  label: string;
  type: string;
  cta: string;
  htmlFor: string;
  message: string;
  error: string;
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

export const FormTitle = (props: Props) => {
  return <h2 className={"c-form-title"}>{props.title}</h2>;
};

export const FormInput = (props: Props) => {
  return (
    <div className={"c-form-group"}>
      <label htmlFor={props.id} className={"c-form-label"}>
        <span className={"c-form-label-title"}>{props.label}</span>
        <span className={"c-form-error"}>{props.error}</span>
      </label>
      <input
        id={props.id}
        name={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={"c-form-input"}
      />
    </div>
  );
};

export const FormGroup = (props: Props) => {
  return <div className={"c-form-group"}>{props.children}</div>;
};

export const FormButton = (props: Props) => {
  return (
    <div className={"c-form-group"}>
      <button onClick={props.onClick} className={"c-form-button-primary"}>
        {props.cta}
      </button>
    </div>
  );
};

export const FormPartition = (props: Props) => {
  return <div className={"c-form-partition"}>{props.label}</div>;
};
