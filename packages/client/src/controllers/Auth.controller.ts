import axios, { AxiosError } from "axios";
import AuthApi from "../api/Auth.api";

export interface IUserData{
    firstName?: string;
    secondName?: string;
    login?: string;
    email?: string;
    password?: string;
    phone?: string;
  }

export interface ISigninModel {
    login?: string;
    password?: string
}

class AuthController{
    public async signup(data: IUserData){
        try{
            const result = await AuthApi.signup(data).then(response => {
            })
        }catch(e: any){
            return `Возникла ошибка: ${e.message}`
        }
    }

    public async signin(data: ISigninModel){
        try{
            const result = await AuthApi.signin(data)
        }catch(e: any){
            return `Возникла ошибка: ${e.message}`
        }
    }
}

export default new AuthController()
