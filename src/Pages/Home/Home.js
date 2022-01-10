import React from 'react'
import Product from '../../Components/Products/Product';
// import Product_category from '../../Components/ProductCategory/Product_category'
import './style.css'
import headset from "../../Images/headset.jpg"
import keyboard from "../../Images/keyboard.jpg"
import gift from "../../Images/gift.jpg"
import toys from "../../Images/toys.jpg"




 const Home = () => {
    return (
        <div>
      <div className='home_imageContainer'>
           <div className="home">
               <img 
               className="home-image"
               src='https://m.media-amazon.com/images/I/610aFo74RdL._SX3000_.jpg' alt="banner"></img> 

<div className="home-row">
            <Product
               id="1"
               title="Headset"
               price={1500}
               rating={5}
               image={headset}
            ></Product>

            <Product
               id="2"
               title="Keyboard"
               price={2000}
               rating={5}
               image={keyboard}
            />
               </div>

            <div className="home-row">
            <Product
               id="3"
               title="Goliday Gifts Guide"
               price={2980}
               rating={5}
               image={gift}
            ></Product>

            <Product
               id="4"
               title="Toys"
               price={1000}
               rating={4}
               image={toys}
            ></Product>

            <Product
               id="5"
               title="Headset"
               price={1500}
               rating={5}
               image={headset}
            ></Product>
        </div>

        <div className="home-row">
            <Product
               id="1"
               title="Headset"
               price={1500}
               rating={5}
               image={headset}
            ></Product>

            <Product
               id="2"
               title="Keyboard"
               price={2000}
               rating={5}
               image={keyboard}
            />
               </div>

{/* <div className='home-top-section'>
        <Product_category
          title='Gaming accessories'
          image={headset}
          link='See more'
        />
        <Product_category
          title='Electonics'
          image={keyboard}
          link='See more'
        />
         <Product_category
          title='Electonics'
          image={headset}
          link='See more'
        />
        <Product_category
          title='Electonics'
          image={keyboard}
          link='See more'
        />
        </div> */}
           </div>
           </div>
        </div>
    )
}

export default Home;
