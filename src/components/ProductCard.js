import React from 'react'
import { Link, useLocation } from 'react-router-dom'
//import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  
  return (
    <>
        <div 
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3" } `}>
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
              <Link>
                 <img src='images/wish.svg' alt='wishlist' />
              </Link>
          </div>
        <div className='product-image'>
            <img 
              src='images/watch.jpg' 
              className='img-fluid' 
              alt='product image'
            />
            <img 
              src='images/watch-1.jpg' 
              className='img-fluid' 
              alt='product image'
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
              <Link>
                 <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link>
                 <img src='images/view.svg' alt='view' />
              </Link>
              <Link>
                 <img src='images/add-cart.svg' alt='addcard' />
              </Link>
            </div>
          </div>
        </Link>
    </div>

    <div 
      className={` ${location.pathname == "/store" ? `gr-${grid}` : "col-3" } `}>
        <Link className='product-card position-relative'>
          <div className='wishlist-icon position-absolute'>
              <Link>
                 <img src='images/wish.svg' alt='wishlist' />
              </Link>
          </div>
        <div className='product-image'>
            <img 
              src='images/watch.jpg' 
              className='img-fluid' 
              alt='product image'
            />
            <img 
              src='images/watch-1.jpg' 
              className='img-fluid' 
              alt='product image'
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
              <Link>
                 <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link>
                 <img src='images/view.svg' alt='view' />
              </Link>
              <Link>
                 <img src='images/add-cart.svg' alt='addcard' />
              </Link>
            </div>
          </div>
        </Link>
    </div>
    </>
  )
}

export default ProductCard