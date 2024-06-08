import {AppCookie} from '../services/cookie'

export const init={
    isLoggedIn:AppCookie.getCookie("token")?true:false
}