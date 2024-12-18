import React, { useEffect } from "react";
import Container from "../components/Container";
import BreadCrumb from "../components/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../features/user/userSlice";

const Order = () => {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state?.auth?.getorderedProduct?.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <>
      <BreadCrumb title="My Profile" />
      <Container class1="main-product-wrapper py-5 home-wrapper-4">
        <div className="row ms-2">
          <div className="col-12">
            <div className="row">
              <div className="col-3">
                <h5>Order Id</h5>
              </div>
              <div className="col-3">
                <h5>Total Amount</h5>
              </div>
              <div className="col-3 ">
                <h5>Total Amount <br /> after Discount</h5>
              </div>
              <div className="col-3">
                <h5>Status</h5>
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            {
              orderState && orderState?.map((item, index) => {
                return(
                  <div className="row pt-4 my-3" style={{backgroundColor: "#baa122"}} key={index}>
              <div className="col-3 ">
                <p>{item?._id}</p>
              </div>
              <div className="col-3 ms-2">
                <p>{item?.totalPrice}</p>
              </div>
              <div className="col-3 ms-2">
                <p>{item?.totalPriceAfterDiscount}</p>
              </div>
              <div className="col-2">
                <p>{item?.orderStatus}</p>
              </div>

              <div className="col-12">
                <div  className="row py-3" style={{backgroundColor: "#343b45"}} >
                  <div className="col-2 me-1">
                    <h6 className="text-white">Product Name</h6>
                  </div>
                  <div className="col-2 ms-5">
                    <h6 className="text-white">Price</h6>
                  </div>
                  <div className="col-2 ms-4">
                    <h6 className="text-white">Size</h6>
                  </div>
                  <div className="col-2 ms-4">
                    <h6 className="text-white">Color</h6>
                  </div>
                  <div className="col-2 ms-4">
                    <h6 className="text-white">Quantity</h6>
                  </div>
                  
                  {
                    item?.orderItems?.map((i,index)=>{
                      return (
                        <div className="col-12">
                <div className="row p-3" >
                  <div className="col-2">
                    <p className="text-white">{i?.product?.title}</p>
                  </div>
                  <div className="col-2 ms-5">
                    <p className="text-white">{i?.price}</p>
                  </div>
                  <div className="col-2 ms-4">
                    <p className="text-white">{i?.size}</p>
                  </div>
                  <div className="col-2 ms-4">
                  <ul className="colors ps-0">
                          <li
                            style={{ backgroundColor: i?.color?.title }}
                          ></li>
                        </ul>
                  </div>
                  <div className="col-2 ms-4">
                    <p className="text-white">{i?.quantity}</p>
                  </div>
                </div>
              </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
                )
              })
            }
          </div>
        </div>
      </Container>
    </>
  );
};

export default Order;
