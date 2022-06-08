export type  FieldValidatorType = (value: string) => string | undefined

export const required: FieldValidatorType = (value) => {
    if(value) return undefined;
    return 'Field is required';    
}

export const maxLengthCreator = (maxLength: number): FieldValidatorType => (value) => {
    if(value && value.length > maxLength ) return `Max lenght is ${maxLength} symbols`;
    return undefined;    
}

export const maxLength30: FieldValidatorType = value => {
    if(value && value.length > 30 ) return 'Max lenght is 30 symbols';
    return undefined;    
}