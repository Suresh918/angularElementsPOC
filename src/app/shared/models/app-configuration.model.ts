export interface FormControlConfiguration {
  placeholder?: string;
  help?: string;
  hint?: string;
  prefix?: string;
  suffix?: string;
  minDate?: Date;
  maxDate?: Date;
  label?: string;
  tag?: string;
  enumeration?: FormControlEnumeration[];
  validatorConfiguration?: FormControlValidators;
}

export interface FormControlEnumeration {
  name: string;
  label: string;
  sequence?: number;
}

export interface FormControlValidators {
  minLength?: number;
  maxLength?: number;
  required?: number;
  pattern?: RegExp;
}
