import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import watch from "../images/watch.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getUserProductWishlist } from "../features/user/userSlice";
import { CgAdd } from "react-icons/cg";
import { addToWishlist } from "../features/products/productSlice";
import { ImCross } from "react-icons/im";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getWishlistFromDb();
  }, []);
  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector(
    (state) => state.auth?.wishlist?.wishlist || []
  );
  // const EMPTY_ARRAY = [];
  // const wishlistState = useSelector((state) => state.auth?.wishlist?.wishlist || EMPTY_ARRAY);
  const removeFromWishlist = (id) => {
    dispatch(addToWishlist(id));
    setTimeout(() => {
      dispatch(getUserProductWishlist());
    }, 300);
  };
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title="Wishlist" />
      <Container class1="whishlist-wrapper home-wrapper-4 py-5">
        <div className="row">
          {wishlistState.length === 0 && (
            <div className="text-center fs-3">No Data</div>
          )}
          {wishlistState?.map((item, index) => {
            return (
              <div className="col-3" key={index}>
                <div className="wishlist-card position-relative">
                  <ImCross
                    onClick={() => {
                      removeFromWishlist(item?._id);
                    }}
                    className="position-absolute cross"
                  />
                  {/* <img onClick={() => {
                    removeFromWishlist(item?._id);
                  }}
                    src="images/cross.svg"
                    alt="cross"
                    className="position-absolute cross img-fluid"
                  /> */}
                  <div className="wishlist-card-image bg-white ">
                    <img
                      src={
                        item?.images[0].url ? item?.images[0].url : { watch }
                      }
                      className="img-fluid d-block mx-auto"
                      alt="watch"
                      width={200}
                    />
                  </div>
                  <div className="py-3 px-3">
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">LKR {item?.price}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
