type TJoiErrorMessages = {
  [key: string]: string
}

type TJoiErrorBuilder = (fieldName: string) => TJoiErrorMessages

const EMPTY_MESSAGE             = (fieldName: string) => `Поле ${fieldName} не должно быть пустым`;
const STRING_DATA_TYPE_MESSAGE  = (fieldName: string) => `Поле ${fieldName} должно иметь тип string`
const FIELD_IS_REQUIRED_MESSAGE = (fieldName: string) => `Поле ${fieldName} является обязательным`
const MIN_STRING_LENGTH_MESSAGE = (fieldName: string) => `Минимальная длина поля ${fieldName} = `
const MAX_STRING_LENGTH_MESSAGE = (fieldName: string) => `Максимальная длина поля ${fieldName} = `
const STRING_URI_MESSAGE        = (fieldName: string) => `Поле ${fieldName} должно быть ссылкой`
const STRING_EMAIL_MESSAGE      = (fieldName: string) => `Поле ${fieldName} должно быть почтой`

export const stringErrorMessageBuilder:TJoiErrorBuilder = (fieldName) => {
  return {
    "string.base"     : `${STRING_DATA_TYPE_MESSAGE(fieldName)}`,
    "string.empty"    : `${EMPTY_MESSAGE(fieldName)}`,
    "string.required" : `${FIELD_IS_REQUIRED_MESSAGE(fieldName)}`,
    "string.max"      : `${MAX_STRING_LENGTH_MESSAGE(fieldName)} {{#limit}}`,
    "string.min"      : `${MIN_STRING_LENGTH_MESSAGE(fieldName)} {{#limit}}`,
    "string.uri"      : `${STRING_URI_MESSAGE(fieldName)}`,
    "string.email"    : `${STRING_EMAIL_MESSAGE(fieldName)}`
  }
}