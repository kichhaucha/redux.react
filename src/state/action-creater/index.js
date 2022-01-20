export const DepositeMoney=(amount)=>{
        return (dispatch)=>{
            dispatch({
                type:"deposit",
                payload:amount
            })
        }
}


export const WithrowMoney=(amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"withrow",
            payload:amount
        })
    }
}