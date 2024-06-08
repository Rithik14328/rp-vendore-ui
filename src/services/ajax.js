import axios, { Axios } from "axios"

export class ajax{
   static sendGetReq(url){
        return axios.get(url)
    }
    static sendPostReq(url,data){
       return  axios.send(url,data)
    }
    static sendPutReq(url,data){
        return axios.put(url,data)
    }
    static sendDeleteReq(url){
        return axios.delete(url)
    }
      
    
}