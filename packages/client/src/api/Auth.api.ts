import BaseApi, {instance} from './Base.api'
import { IUserData, ISigninModel } from '../controllers/Auth.controller';

class Auth{

    public async signup(data: IUserData){
            return await BaseApi.post('/auth/signup', {
                first_name: data.firstName,
                second_name: data.secondName,
                login: data.login,
                email: data.email,
                password: data.password,
                phone: data.phone
            }).then(response => response)
    }

    public signin(data: ISigninModel){

    }
}

export default new Auth()