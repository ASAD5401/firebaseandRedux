export const incNumber = (body) => {
    return {
        type: 'INCREMENT',
        payload:body
    }
}


export const decNumber = (body) => {
    return {
        type: 'DECREMENT',
        payload:body
    }
}