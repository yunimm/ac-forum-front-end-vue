import { apiHelper } from './../utils/helpers'

export default {
  signIn ({ email, password}) {
    // 沒有要在這裡將資料拿出來，所以使用return將資料導出
    return apiHelper.post('/signin', {
       email, password
      })
  },
  signUp (data) {
    return apiHelper.post('/signup',{
      ...data
    })
  }
}