import React from 'react'
import "./style.css"
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';

 const Subtotal = () => {
  const [{ basket }, disptach] = useStateValue()

    return (
        <div className='subtotal'>
            <h1>Subtotal</h1>
            {/* {Price} */}

            <CurrencyFormat
            renderText={(value)=> (
                <>
                <p>
                    Subtotal ({basket.length} items) <strong>{value}</strong>
                    <p>
                        <small className='subtotal-gift'>
                            <input type="checkbox" /> This order contains a gift.
                        </small>
                    </p>
                </p>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            // value={0}
            displayType={Text}
            prefix={"$"}

            />
            <button>Proceed to Checkout</button>

        </div>
    )
}

export default Subtotal;
