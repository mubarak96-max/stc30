import {useGlobalContext} from './context'
import React from 'react'

function OrderForm() {
const {removeForm,showOrder} = useGlobalContext()

    return (
    <article>
      order form
    </article>
    )
}

export default OrderForm
