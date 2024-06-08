export const appreduce:any=(state:any,action:any)=>{
    switch (action?.type) {
        case 'LOGIN':
            return {
                ...state,
                ...action.payload
            }
        }
    return state
}