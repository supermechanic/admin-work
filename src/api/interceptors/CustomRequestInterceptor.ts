//此拦截器主要用于在http头中添加认证相关信息
import { useUserStoreContext } from '@/store/modules/user'
import { AxiosRequestConfig } from 'axios'

export default function (config: AxiosRequestConfig) {
  const useStore = useUserStoreContext()
  if (config) {
    if (!config.headers) {
      config.headers = {}
    }
    if (!config.headers['Auth']) {
      config.headers['Auth'] = useStore.token
    }
  }
  return config
}
