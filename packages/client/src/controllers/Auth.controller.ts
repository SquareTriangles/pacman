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
            await AuthApi.signup(data)
                .then(response => response.data)
        }catch(error: any){
            return `Возникла ошибка: ${error.message}`
        }
    }

    public async signin(data: ISigninModel){
        try{
            await AuthApi.signin(data)
                .then(response => response.data)
        }catch(error: any){
            return `Возникла ошибка: ${error.message}`
        }
    }

    public async logout(){
        await AuthApi.logout()
    }
}

export default new AuthController()
