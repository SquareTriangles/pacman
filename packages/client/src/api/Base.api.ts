import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2'
})

class BaseApi{
    public post(url: string, data: any, ...options: any) {
        return instance.post(url, data, options)
    }
    public get(url: string, ...options: any){
        return instance.get(url, options)
    }
}

export default new BaseApi()
