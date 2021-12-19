import { Ioptions } from "../Page/Form/typeForData";

export interface Iprops {
  options?: Ioptions[];
  name: string;
  label?:string
}

export interface Iitem {
  id: number;
  value: string;
}

export interface IconfigSelect extends IconfigTextField {
  select?: boolean;
  onChange?: () => {};
}

export interface IconfigTextField {
  variant: string;
  fullWidth: boolean;
  error?: boolean;
  helperText?: string | undefined;
}

export interface IconfigDateTime extends IconfigTextField {
  type: string;
  InputLabelProps: InputLabelProps;
}

interface InputLabelProps {
  shrink: boolean;
}

export interface IcatchError{
    error?:boolean
}


export interface Ifield {
  name: string;
  onChange: () => {};
  onBlur: () => {};
  value: string;
}
