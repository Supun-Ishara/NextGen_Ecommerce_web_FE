import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GoGitCompare } from "react-icons/go";
import { MdFavoriteBorder } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CgMenuGridO } from "react-icons/cg";

const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  const [total, setTotal] = useState(null);
  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < cartState.length; index++) {
      sum =
        sum +
        Number(cartState[index].quantity) * Number(cartState[index].price);
      setTotal(sum);
    }
  });

  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns.{" "}
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:
                <a className="text-white" href="tel:+94 718465703">
                  +94 718465703
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">NextGen</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Design Here..."
                  aria-label="Search Design Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div >
                  <Link
                    to="/compare-product"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    {/* <img src="images/compare.svg" alt="compare" /> */}
                    <GoGitCompare size={35} />
                    <p className="mb-0">
                      {" "}
                      Compare <br /> Designs
                    </p>
                  </Link>
                </div>
                <div style={{marginLeft: "20px"}}>
                  <Link
                    to="/wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    {/* <img src="images/wishlist.svg" alt="wishlist" /> */}
                    <MdFavoriteBorder size={35} />
                    <p className="mb-0">
                      {" "}
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div style={{marginLeft: "20px"}}>
                  <Link
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    {/* <img src="images/user.svg" alt="user" /> */}
                    <FaRegUser size={35} />
                    <p className="mb-0">
                      {" "}
                      Log in <br /> My Account{" "}
                    </p>
                  </Link>
                </div>
                <div style={{marginLeft: "20px"}}>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    {/* <img src="images/cart.svg" alt="cart" /> */}
                    <TiShoppingCart size={45} style={{color: "#c4a806"}}/>
                    <div className="d-flex flex-colunm gap-10">
                      <span className="badge bg-white text-dark">{ cartState?.length ? cartState?.length : 0}</span>
                      <p className="mb-0">LKR {total ? total : 0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {/* <img src="images/menu.svg" alt="menu" /> */}
                      <CgMenuGridO size={38}/>
                      <span className="me-5 d-inline-block">
                        Clothes Categories
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-item-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/product">Our Store</NavLink>
                    <NavLink to="/">Blogs</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
