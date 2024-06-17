"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect, useReducer } from "react";
 import {init} from "../statemanagment/init"
import "bootstrap/dist/css/bootstrap.css"
 import {appReducer} from "../statemanagment/appReducer"

import {AppCtxProvider} from "@/statemanagment/context"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppCookie } from "@/services/cookie";



const inter = Inter({ subsets: ["latin"] });

interface State {
  isLoggedIn: boolean;
}
interface loginAction {
  type: 'LOGIN';
  payload:any
}
type Action = loginAction

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>){
  

 
  const [state,dispatch]=useReducer<React.Reducer<State,Action>>(appReducer,init)

  
//  async function abc(){
//      const isLoggedIn=await AppCookie.hasToken()
//      console.log(isLoggedIn)
//   }
//   abc()

  useEffect(()=>{
    (
      async()=>{
        const isLoggedIn=await AppCookie.hasToken()
        dispatch({
          type:"LOGIN",
          payload:isLoggedIn
        })
      }
    )()
  },[])

  const obj:{state:any,dispatch:any}={
    state,dispatch
  }
  return (
    <html lang="en">
      <head>
        <title>customer app</title>
      </head>
      <body className={inter.className}>
       
        <AppCtxProvider myData={obj}>
        <Header/>
        {children}
        <Footer/>
        </AppCtxProvider>
    
       </body>
    </html>
  );
}
