import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { useStateValue } from '../../StateProvider';
import './style.css'

 const CartProduct = ({id, title, image, price, rating}) => {
     const [{ basket }, dispatch] = useStateValue();
     console.log(basket)

    const removeFromBasket = () => {
        // console.log(removeFromBasket)
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className='cartProduct'>
      <div className='cartProduct-img'>
            <img src={image} alt=''/>
            </div>
            <div className='cartProduct-info'>
                <p className='cartProduct-title'>{title}</p>
                <p className='cartProduct-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='cartProduct-rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p className="star-icon"><AiFillStar/></p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
            
        </div>
    )
}

export default CartProduct;
