export interface IUserModel {
  id: number
  first_name: string
  second_name: string
  display_name: string
  login: string
  email: string
  phone: string
  avatar: string
}

export interface IUpdateProfileModel extends Omit<IUserModel, 'id' | 'avatar' > {}

export interface IUpdatePasswordModel {
  oldPassword: string
  newPassword: string
}