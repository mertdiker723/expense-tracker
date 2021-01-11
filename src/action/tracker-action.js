import { Types } from './action-type.js'

export const addIncome = (transaction) => {
    return {
        type: Types.ADD_TRANSACTION,
        transaction
    }
}

export const deleteExpense = (id) => {
    return {
        type: Types.DELETE_TRANSACTION,
        id
    }
}