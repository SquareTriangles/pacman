export interface ISigninModel {
  login: string
  password: string
}

export interface ISignupModel {
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
}

export interface ISignupResponceModel extends ISignupModel {
  id: string,
  avatar: string,
}

