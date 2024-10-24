import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartProduct,
  getUserCart,
  updateCartProduct,
} from "../features/user/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [productUpdateDetail, setProductUpdateDetail] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const userCartState = useSelector((state) => state.auth.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);
  useEffect(() => {
    console.log('userCartState:', userCartState);
  }, [userCartState]);
  useEffect(() => {
    if (productUpdateDetail !== null) {
      dispatch(
        updateCartProduct({
          cartItemId: productUpdateDetail?.cartItemId,
          quantity: productUpdateDetail?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [productUpdateDetail, dispatch]);

  const deleteACartProduct = (id) => {
    dispatch(deleteCartProduct(id));
    setTimeout(() => {
      dispatch(getUserCart());
    }, 200);
  };

useEffect(() => {
let sum = 0;
for (let index = 0; index < userCartState?.length; index++) {
  sum = sum+(Number(userCartState[index].quantity)*userCartState[index].price)
  setTotalAmount(sum);

}
}, [userCartState])

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-4 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            {/* {Array.isArray(userCartState) && userCartState.length > 0 ? (
  userCartState.map((item, index) => { */}
      {/* {userCartState &&
              userCartState?.map((item, index) => { */}
              {userCartState && userCartState.length > 0 ? (
               userCartState.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                >
                  <div className="cart-col-1 gap-15 d-flex align-items-center">
                    <div>
                      <img
                        // src={watch}
                        src={item?.productId?.images?.[0]?.url || watch}
                        className="img-fluid"
                        alt="product image"
                      />
                    </div>
                    <div className="w-75">
                      <p>{item?.productId.title}</p>
                      {/* <p>Size: red</p> */}
                      <p className="d-flex gap-3">
                        Color:{" "}
                        <ul className="colors ps-0">
                          <li
                            style={{ backgroundColor: item?.color?.title }}
                          ></li>
                        </ul>
                      </p>
                      <p>Size: {item?.size}</p>

                    </div>
                  </div>
                  <div className="cart-col-2">
                    <h5 className="price">LKR {item?.price}</h5>
                  </div>
                  <div className="cart-col-3 d-flex align-items-center gap-15">
                    <div>
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        className="form-control"
                        style={{ width: "63px" }}
                        id=""
                        value={
                          productUpdateDetail?.quantity
                            ? productUpdateDetail?.quantity
                            : item?.quantity
                        }
                        onChange={(e) => {
                          setProductUpdateDetail({
                            cartItemId: item?._id,
                            quantity: e.target.value,
                          });
                        }}
                      />
                    </div>
                    <div>
                      <RiDeleteBin5Fill
                        onClick={() => {
                          deleteACartProduct(item?._id);
                        }}
                        className="text-danger"
                        style={{ cursor: "pointer" }}
                        size={22}
                      />
                    </div>
                  </div>
                  <div className="cart-col-4">
                    <h5 className="price">
                      LKR {item?.price * item?.quantity}
                    </h5>
                  </div>
                </div>
               );
             })
 ) : (
   <p>Your cart is empty</p>
 )}
          
          </div>
          <div className="col-12 py-2 mt-4">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button1">
                Continue To Shopping
              </Link>
              {
                (totalAmount !== null || totalAmount !== 0) && 
                <div className="d-flex flex-column align-items-end">
                <h4>SubTotal: LKR {totalAmount}</h4>
                <p>Shipping calculated at checkout</p>
                <Link to="/checkout" className="button1">
                  Checkout
                </Link>
              </div>
              }
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;

// import React from 'react';
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import watch from '../images/watch.jpg';
// import { RiDeleteBin5Fill } from "react-icons/ri";
// import { Link } from 'react-router-dom';
// import Container from '../components/Container';

// const Cart = () => {
//   return (
//     <>
//       <Meta title={"Cart"} />
//       <BreadCrumb title="Cart" />
//       <Container className='cart-wrapper home-wrapper-4 py-5'>
//         <div className='row'>
//           <div className='col-12'>
//             <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
//               <h4 className='cart-col-1'>Product</h4>
//               <h4 className='cart-col-2'>Price</h4>
//               <h4 className='cart-col-3'>Quantity</h4>
//               <h4 className='cart-col-4'>Total</h4>
//             </div>
//             <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
//               <div className='cart-col-1 gap-15 d-flex align-items-center'>
//                 <div>
//                   <img
//                     src={watch}
//                     className="img-fluid"
//                     alt='Watch product image' // More descriptive alt text
//                   />
//                 </div>
//                 <div className='w-75'>
//                   <p>Product Name</p> {/* Change to the actual product name */}
//                   <p>Size: Red</p>
//                   <p>Color: Il</p>
//                 </div>
//               </div>
//               <div className='cart-col-2'>
//                 <h5 className='price'>LKR 4,500.00</h5>
//               </div>
//               <div className='cart-col-3 d-flex align-items-center gap-15'>
//                 <div>
//                   <input
//                     type='number'
//                     name='quantity' // Added name attribute
//                     min={1}
//                     max={10}
//                     className='form-control'
//                     style={{ width: "63px" }}
//                     id='quantity-input' // Added ID for accessibility
//                   />
//                 </div>
//                 <div>
//                   <RiDeleteBin5Fill className='text-danger' />
//                 </div>
//               </div>
//               <div className='cart-col-4'>
//                 <h5 className='price'>LKR 4,500.00</h5>
//               </div>
//             </div>
//           </div>
//           <div className='col-12 py-2 mt-4'>
//             <div className='d-flex justify-content-between align-items-baseline'>
//               <Link to='/product' className='button1'>
//                 Continue To Shopping
//               </Link>
//               <div className='d-flex flex-column align-items-end'>
//                 <h4>
//                   SubTotal: LKR 10,000.00
//                 </h4>
//                 <p>Shipping calculated at checkout</p>
//                 <Link to='/checkout' className='button1'>
//                   Checkout
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }

// export default Cart;
