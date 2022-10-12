export interface IYandexSigninModel {
  code: string
  redirect_uri: string
}

export interface IGetYandexServiceIDModel {
  redirect_uri: string
}

export interface IYandexServiceIDModel {
  service_id: string
}

export interface IYandexServiceErrorModel {
  reason: string
}
