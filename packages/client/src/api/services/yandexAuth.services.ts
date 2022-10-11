import { api, ApiResponse } from '../api'
import { 
  IYandexSigninModel,
  IGetYandexServiceIDModel,
  IYandexServiceIDModel,
  IYandexServiceErrorModel,
} from '../../models/yandexAuth.model'

const YandexAuth = {
  signin(data: IYandexSigninModel): Promise<ApiResponse<string | IYandexServiceErrorModel>> {
    return api.post('/oauth/yandex', data)
  },
  getServiceID(params: IGetYandexServiceIDModel): Promise<ApiResponse<IYandexServiceIDModel>> {
    return api.get('/oauth/yandex/service-id', { params })
  }
}

export default YandexAuth;
