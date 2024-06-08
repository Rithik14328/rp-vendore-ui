"use client"

import {createContext,useContext} from "react"


const deafultvalue={

}
const appctx=createContext(deafultvalue)


export const useAppContext=()=>{
    return useContext(appctx)
 }

export const Appctxprovider=({Children,data}:any)=>{

        return <appctx.Provider value={data}>

            {Children}
            </appctx.Provider>
}