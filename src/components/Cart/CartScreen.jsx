import React, { useEffect } from 'react'
import axios from 'axios'
import './style/cartScreen.css'
import getConfig from '../../utils/getConfig'
import { useSelector } from 'react-redux'
import CartInfo from './CartInfo'

const CartScreen = () => {

  const postPurchase = () => {

    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'

    const objPurchase = {
      street: "Green St. 1456",
      colony: "Southwest",
      zipCode: 12345,
      city: "USA",
      references: "Some references"
    }

    axios.post(URL, objPurchase, getConfig())
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }

  const cart = useSelector(state => state.cart)

  
  return (
    <div>
      <button onClick={postPurchase}>
        <h2>Confirm Purchaes</h2>
      </button>
      <h2>My Cart</h2>
      {
        cart?.map(productCart => (
          <CartInfo
          key={productCart.id}
          productCart={productCart}
          />
        ))
      }
    </div>
  )
}

export default CartScreen