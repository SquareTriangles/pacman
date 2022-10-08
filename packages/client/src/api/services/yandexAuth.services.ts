import { api, ApiResponse } from '../api'
import { IYandexSigninModel, IYandexServiceIDModel} from '../../models/yandexAuth.model'

const YandexAuth = {
  signin(data: IYandexSigninModel): Promise<ApiResponse> {
    return api.post('/oauth/yandex', data)
  },
  getServiceID(params: IYandexServiceIDModel): Promise<ApiResponse> {
    return api.get('/oauth/yandex/service-id', { params })
  }
}

export default YandexAuth;
