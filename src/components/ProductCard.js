import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  
  return (
    <>
        <div 
      className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3" } `}>
        <Link to=':id' className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
              <button className='border-0 bg-transparent'>
                 <img src={wish} alt='Add to Wishlist' />
              </button>
          </div>
        <div className='product-image'>
            <img
              src={watch}
              className='img-fluid' 
              alt='Stylish watch in black'
            />
            <img 
              src={watch2} 
              className='img-fluid' 
              alt='Stylish watch with a different angle'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Frocks</h6>
            <h5 className='product-title'>
            A wide range of styles and colors to match your personal style
            </h5>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            A wide range of styles and colors to match your personal style and stage of pregnancy. 
            Soft, stretchy fabrics that provide comfort all day long. 
            Elegant designs that accentuate your beautiful bump and curves perfectly.
            </p>
            {/* <ReactStars
               count={5}
               size={24}
               activeColor="#ffd700"
            /> */}
            <p className='price'>4500/=</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                 <img src={prodcompare} alt='Compare Product' />
              </button>
              <button className='border-0 bg-transparent'>
                 <img src={view} alt='View Product' />
              </button>
              <button className='border-0 bg-transparent'>
                 <img src={addcart} alt='Add to Cart' />
              </button>
            </div>
          </div>
        </Link>
    </div>

    <div 
      className={` ${location.pathname === "/store" ? `gr-${grid}` : "col-3" } `}>
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
              <button className='border-0 bg-transparent'>
                 <img src={wish} alt='Add to Wishlist' />
              </button>
          </div>
        <div className='product-image'>
            <img 
              src={watch} 
              className='img-fluid' 
              alt='Stylish watch in black'
            />
            <img 
              src={watch2} 
              className='img-fluid' 
              alt='Stylish watch with a different angle'
            />
          </div>
          <div className='product-details'>
            <h6 className='brand'>Frocks</h6>
            <h5 className='product-title'>
            A wide range of styles and colors to match your personal style
            </h5>
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
            A wide range of styles and colors to match your personal style and stage of pregnancy. 
            Soft, stretchy fabrics that provide comfort all day long. 
            Elegant designs that accentuate your beautiful bump and curves perfectly.
            </p>
            {/* <ReactStars
               count={5}
               size={24}
               activeColor="#ffd700"
            /> */}
            <p className='price'>4500/=</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-15'>
              <button className='border-0 bg-transparent'>
                 <img src={prodcompare} alt='Compare Product' />
              </button>
              <button className='border-0 bg-transparent'>
                 <img src={view} alt='View Product' />
              </button>
              <button className='border-0 bg-transparent'>
                 <img src={addcart} alt='Add to Cart' />
              </button>
            </div>
          </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard;