import React, { useEffect } from "react";
// import Marquee from 'react-fast-marquee';
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container1 from "../components/Container1";
import Container from "../components/Container";
import { services } from "../utils/Data";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import { Link, useLocation, useNavigate } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch2 from "../images/watch-1.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addToWishlist } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { FaRegHeart } from "react-icons/fa6";

const Home = () => {
  const productState = useSelector((state) => state.product.product);
  console.log(productState);
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    getallProduct();
  });
  const getallProduct = () => {
    dispatch(getAllProducts());
  };

  const handleAddToWishlist = async (id) => {
    if (!user) {
      toast.error("Please login to add items to wishlist");
      return;
    }

    try {
      await dispatch(addToWishlist(id)).unwrap();
      toast.success("Product added to wishlist");
    } catch (error) {
      toast.error(error?.message || "Failed to add to wishlist");
    }
  };

  return (
    <>
      <Container1 class1="home-wrapper-1 py-5">
        {/* <div className="row"> */}
        <div className="main-banners">
          <Link className="button">
            <img
              src="images/main-banner.jpg"
              className="img-fluid rounded-3"
              alt="main-banner"
            />
          </Link>
        </div>
        {/* </div> */}
      </Container1>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-3 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="gap align-items-cente">
                <img
                  src="images/prom-dress.jpg"
                  alt="prom-dress"
                  className="category"
                />
                <div className="category-name">
                  <h6>Prom Dresses</h6>
                  <p></p>
                </div>
              </div>
              <div className="gap align-items-center">
                <img
                  src="images/party-frock.jpg"
                  alt="party-frock"
                  className="category"
                />
                <div className="category-name">
                  <h6>Party Frocks</h6>
                  <p></p>
                </div>
              </div>
              <div className="gap align-items-center">
                <img
                  src="images/cocktail-dress.jpg"
                  alt="cocktail-dress"
                  className="category"
                />
                <div className="category-name">
                  <h6>Cocktail Frocks</h6>
                  <p></p>
                </div>
              </div>
              <div className="gap align-items-center">
                <img
                  src="images/office-wear.jpg"
                  alt="office-wear"
                  className="category"
                />
                <div className="category-name">
                  <h6>Office Wears</h6>
                  <p></p>
                </div>
              </div>
              <div className="gap align-items-center">
                <img
                  src="images/normal-frock.jpg"
                  alt="normal-frock"
                  className="category"
                />
                <div className="category-name">
                  <h6>Casual Wears</h6>
                  <p></p>
                </div>
              </div>
              <div className="gap align-items-center">
                <img src="images/tops.jpg" alt="tops" className="category" />
                <div className="category-name">
                  <h6>Tops & Shirts</h6>
                  <p></p>
                </div>
              </div>
              <div className="gap align-items-center">
                <img
                  src="images/maternity.jpg"
                  alt="maternity"
                  className="category"
                />
                <div className="category-name">
                  <h6>Maternity Prom Dresses</h6>
                  <p></p>
                </div>
              </div>
              <div className="gap align-items-center">
                <img
                  src="images/jumpsuit.jpg"
                  alt="jumpsuit"
                  className="category"
                />
                <div className="category-name">
                  <h6>Pants & Jumpsuits</h6>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <Link 
                    to={`${
                      location.pathname === "/"
                        ? "/product/"+item?._id
                        : location.pathname === "/product/"+item?._id
                        ? "/product/"+item?._id
                        : item?._id
                    }`}
                    className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToWishlist(item?._id);
                          }}
                        >
                          <FaRegHeart size={19} className="wishlist-icon-img"/>
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0].url ? item?.images[0].url : []}
                          className="img-fluid mx-auto"
                          alt={item?.title || "Product Image"}
                          width={160}
                        />
                        <img
                          src={watch2}
                          className="img-fluid mx-auto"
                          alt={item?.title || "Product Image"}
                          width={160}
                        />
                      </div>
                      <div className="product-details">
                        <h5 className="product-title">
                          {item?.title || "Product Title"}
                        </h5>
                        <p className="price">LKR {item?.price || "N/A"}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="Compare Product" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/"+item?._id)}
                              src={view}
                              alt="View Product"
                            />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="Add to Cart" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="famous-wrapper d-flex py-5 home-wrapper-4">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-01.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5>Big screen</h5>
                <h6>Smart watch series 7</h6>
                <p>from 50000rs or 45000rs/ for 24 month</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-02.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big screen</h5>
                <h6 className="text-dark">Smart watch series 7</h6>
                <p className="text-dark">
                  from 50000rs or 45000rs/ for 24 month
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-03.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big screen</h5>
                <h6 className="text-dark">Smart watch series 7</h6>
                <p className="text-dark">
                  from 50000rs or 45000rs/ for 24 month
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-04.png"
                className="img-fluid"
                alt="famous"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Big screen</h5>
                <h6 className="text-dark">Smart watch series 7</h6>
                <p className="text-dark">
                  from 50000rs or 45000rs/ for 24 month
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="special-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "special") {
                return (
                  <SpecialProduct
                    key={index}
                    id={item?._id}
                    category={item?.category}
                    title={item?.title}
                    price={item?.price}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
              }
            })}
          {/* <SpecialProduct/> */}
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Dresses</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <Link
                       to={`${
                        location.pathname === "/"
                          ? "/product/"+item?._id
                          : location.pathname === "/product/"+item?._id
                          ? "/product/"+item?._id
                          : item?._id
                      }`}
                      className="product-card position-relative"
                    >
                      <div className="wishlist-icon position-absolute">
                        <button
                          className="border-0 bg-transparent"
                          onClick={(e) => {
                            e.preventDefault();
                            handleAddToWishlist(item?._id);
                          }}
                        >
                          <FaRegHeart size={19} className="wishlist-icon-img"/>
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0].url ? item?.images[0].url : []}
                          className="img-fluid mx-auto"
                          alt={item?.title || "Product Image"}
                          width={160}
                        />
                        <img
                          src={watch2}
                          className="img-fluid mx-auto"
                          alt={item?.title || "Product Image"}
                          width={160}
                        />
                      </div>
                      <div className="product-details">
                        <h5 className="product-title">
                          {item?.title || "Product Title"}
                        </h5>
                        {/* <p
                        className={`description ${
                          grid === 12 ? "d-block" : "d-none"
                        }`}
                        dangerouslySetInnerHTML={{ __html: item?.description || "" }}
                      /> */}
                        <p className="price">LKR {item?.price || "N/A"}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="Compare Product" />
                          </button>
                          <button className="border-0 bg-transparent">
                          <img
                              onClick={() => navigate("/product/"+item?._id)}
                              src={view}
                              alt="View Product"
                            />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img src={addcart} alt="Add to Cart" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          {/* <ProductCard /> */}
        </div>
      </Container>
    </>
  );
};

export default Home;
