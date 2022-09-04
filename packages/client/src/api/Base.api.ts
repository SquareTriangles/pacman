import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2'
})

class BaseApi{
    public post(url: string, data: any) {
        return instance.post(url, data)
    }
    public get(url: string){
        return instance.get(url)
    }
}

export default new BaseApi()
