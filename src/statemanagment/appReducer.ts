export const appReducer: any = (state:any, action:any) => {

    switch (action?.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn:action.payload
                // ...action.payload
            }
        }
    return state
}

// console.log(appReducer)