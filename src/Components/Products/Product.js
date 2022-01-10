import React from 'react'
import "./style.css"
import {AiFillStar} from "react-icons/ai"
import { useStateValue } from '../../StateProvider'

 const Product = ({ id, title, image, price, rating }) => {
     const [{basket}, dispatch] = useStateValue();

     const addToBasket = () => {
         console.log("clicked")
         //Add item to basket
         dispatch({
             type: 'ADD_TO_BASKET',
             item: {
                 id: id,
                 title: title,
                 image: image,
                 price: price,
                 rating: rating
             }
         })
     }
    return (
        <div className="product">
            <div className="product-info">
            <p>{title}</p>
            <p className="product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
        
        <div className="product-rating">
            {
                Array(rating)
                .fill()
                .map((_) => (
                    <p className="star-icon">
                        <AiFillStar/>
                    </p>
                ))
            }
            </div>
            
        </div>
        <img src= {image} alt=""/>
        <button onClick={addToBasket}>Add to basket</button>
        </div>

    )
}

export default Product;
