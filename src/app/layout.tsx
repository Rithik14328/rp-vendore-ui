"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import React, { useEffect, useReducer } from "react";
 import {init} from "../statemanagment/init"

 import {appreduce} from "../statemanagment/appReducer"

import {Appctxprovider} from "@/statemanagment/context"

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AppCookie } from "@/services/cookie";



const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

 
  const [state,dispatch]=useReducer<React.Reducer<State,Action>>(appreduce,init)

  useEffect(()=>{
    (
      async()=>{
        const isLoggedIn=await AppCookie.hasToken()
        dispatch({
          type:"LOGIN",
          payload:isLoggedIn
        })
      }
    )
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
       
        <Appctxprovider data={obj}>
        <Header/>
        {children}
        <Footer/>
        </Appctxprovider>
    
       </body>
    </html>
  );
}
