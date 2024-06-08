import 'cookie-store';

export class AppCookie {

    static setDate(days) {
        const dateObj = new Date()
        dateObj.setDate(dateObj.getDate() + days)
        return dateObj
    }

    static async getCookie(key) {
        const cookieObj = await cookieStore.get(key)
        return cookieObj?.value
    }

    static async getAllCookie(key) {
        const cookieArr = await CookieStore.getAll(key)
        return cookieArr
    }


    static async setcookies(name, value, days) {
        const cookieObj = { name, value }
        if (days) {
            cookieObj.expires = AppCookie.setDate(days)
        }
        await CookieStore.set(cookieObj)

    }

    static async deleteCookie(key) {
        const deleteCookie = await CookieStore.delete(key)
        return deleteCookie
    }


    static async hasToken(){
        const cookieObj=await CookieStore.get("token")
        return cookieObj?true:false
    }

}
