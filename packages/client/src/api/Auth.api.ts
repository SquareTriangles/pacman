import BaseApi from './Base.api'
import { IUserData, ISigninModel } from '../controllers/Auth.controller';

class Auth {
    public async signup(data: IUserData){
            return await BaseApi.post('/auth/signup', {
                first_name: data.firstName,
                second_name: data.secondName,
                login: data.login,
                email: data.email,
                password: data.password,
                phone: data.phone
            }, {withCredentials: true})
            .then(response => response)
    }

    public async signin(data: ISigninModel){
        return await BaseApi.post('/auth/signin', {
            login: data.login,
            password: data.password
        },{withCredentials: true})
        .then(response => response)        
    }

    public async logout(){
        return await BaseApi.get('/auth/logout', {withCredentials: true})
    }
}

export default new Auth()