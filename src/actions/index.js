import {ADD_CUSTOMER} from '../constants/index'

export function addCustomer(payload)
{
    return {
        type: ADD_CUSTOMER,
        payload:payload
    }
}