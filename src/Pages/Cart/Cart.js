import React from 'react'
import CartProduct from '../../Components/CartProduct/CartProduct'
import Subtotal from '../../Components/Subtotal/Subtotal'
// import Product from '../../Components/Products/Product'
import { useStateValue } from '../../StateProvider'
import "./style.css" 
// import Product from '../../Components/Products'

import CurrencyFormat from 'react-currency-format'

 const Cart = () => {
  const [{basket}] = useStateValue()
  console.log({basket})
    return (
        <div className='cart'>
        <div className='cart-left'>
          {basket?.length === 0 ? (
            <div className='cart-nothing'>
              <h3>You have added nothing to your cart. please Add something</h3>
            </div>
          ) : (
            <div className='cart-items'>
              <h2>Your shopping basket</h2>
              {basket.map((item) => (
                <CartProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          )}
        </div>
        <div className='cart-right'>
          {basket.length > 0 && (
            <div className='cartright'>
              <Subtotal />
            </div>
          )}
        </div>
        </div>
    )
}

export default Cart;