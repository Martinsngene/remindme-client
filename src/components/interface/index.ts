/** @format */

export interface GlobalPropsI {
  header?: string;
  showHeader?: boolean;
  children: React.ReactNode;
  className?: string;
}

export interface ButtonPropsI {
  children?: React.ReactNode;
  onClick?: (param: any) => void;
  className?: string;
  fill?: string;
  label?: string;
}

export interface CardPropsI {
  name?: string;
  className?: string;
  description: string;
  linkLabel: string;
  imgUrl: string;
  link?: string;
}

export interface InputPropsI {
  label?: string;
  id?: string;
  htmlFor?: string;
  type?: string;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export interface TextAreaPropsI {
  label?: string;
  id?: string;
  htmlFor?: string;
  type?: string;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

export interface ModalPropsI {
  children: React.ReactNode;
}
