import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import sizechart from "../images/size-chart.jpg";
import Container from "../components/Container";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getAProduct } from "../features/products/productSlice";
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from "../features/user/userSlice";

const SingleProduct = () => {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [alreadyAdded, setAlreadyAdded] = useState(false);
  const [popularProduct, setPopularProduct] = useState([]);
  
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const location = useLocation();
  const navigate = useNavigate();
  const getProductId = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.singleproduct);
  const productsState = useSelector((state) => state?.product?.product);
  const cartState = useSelector((state) => state?.auth?.cartProducts);
  useEffect(() => {
    dispatch(getAProduct(getProductId));
    dispatch(getUserCart());
    dispatch(getAllProducts())
  }, [dispatch, getProductId]);

  useEffect(() => {
    if (cartState && cartState.length > 0) {
      for (let index = 0; index < cartState?.length; index++) {
        if (getProductId === cartState[index]?.productId?._id) {
          setAlreadyAdded(true);
          break;
        }
      }
    }
  }, [cartState, getProductId]);

  const handleImageMouseMove = (e) => {
    if (!isZoomed) return;

    const bounds = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - bounds.left) / bounds.width) * 100;
    const y = ((e.clientY - bounds.top) / bounds.height) * 100;
    
    setMousePosition({ x, y });
  };

  const handleImageMouseEnter = () => setIsZoomed(true);
  const handleImageMouseLeave = () => setIsZoomed(false);

  const uploadCart = () => {
    if (selectedColor === null) {
      toast.error("Please Choose Color");
      return false;
    } else if (selectedSize === null) {
      toast.error("Please Choose Size");
      return false;
    } else {
      dispatch(
        addProductToCart({
          productId: productState?._id,
          quantity,
          color: selectedColor,
          size: selectedSize, // This is the selected size
          price: productState?.price,
        })
      );
      navigate("/cart");
    }
  };

  // const props = {
  //   width: 400,
  //   height: 600,
  //   zoomWidth: 600,
  //   img: productState?.images[0]?.url ? productState?.images[0]?.url : [],
  // };
  // const catImageUrl = '../images/watch.jpg';

  useEffect(() => {
    let data = [];
    for (let index = 0; index < productsState.length; index++) {
      const element = productsState[index];
      if (element.tags === "popular") {
        data.push(element);
      }
      setPopularProduct(data);
    }
  }, [productsState]);



  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title={productState?.title}/>

      <Container class1="main-product-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-6">
          <div className="main-product-image">
              <div
                className="image-container position-relative overflow-hidden"
                style={{ height: "600px" }}
                onMouseMove={handleImageMouseMove}
                onMouseEnter={handleImageMouseEnter}
                onMouseLeave={handleImageMouseLeave}
              >
                {productState?.images?.[selectedImageIndex]?.url && (
                  <>
                    <img
                      src={productState.images[selectedImageIndex].url}
                      alt="product"
                      className="img-fluid w-100 h-100 object-fit-cover"
                      style={{ objectPosition: "center" }}
                    />
                    {isZoomed && (
                      <div
                        className="zoomed-image position-absolute w-100 h-100"
                        style={{
                          backgroundImage: `url(${productState.images[selectedImageIndex].url})`,
                          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
                          backgroundSize: "200%",
                          backgroundRepeat: "no-repeat",
                          top: 0,
                          left: 0,
                          zIndex: 1,
                        }}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15 mt-3">
              {productState?.images?.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer ${
                    selectedImageIndex === index ? "border border-primary" : ""
                  }`}
                  style={{ width: "100px", height: "100px" }}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <img
                    src={item?.url}
                    alt={`product-${index}`}
                    className="img-fluid w-100 h-100 object-fit-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">{productState?.title}</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">LKR {productState?.price}</p>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type : </h3>
                  <p className="product-data">Prom Dress</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category : </h3>
                  <p className="product-data">{productState?.category}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags : </h3>
                  <p className="product-data">{productState?.tags}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">SKU : </h3>
                  <p className="product-data">{productState?.sku}</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability : </h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Size : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    {productState?.size?.map((size, index) => (
                      <span
                        key={index}
                        className={`badge border border-1 bg-white text-dark border-secondary ${
                          selectedSize === size ? "active" : ""
                        }`}
                        onClick={() => setSelectedSize(size)} // Set selected size
                        style={{ cursor: "pointer" }}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {alreadyAdded === false && (
                  <>
                    <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                      <h3 className="product-heading">Color : </h3>
                      <div className="product-color">
                        <Color
                          setColor={setSelectedColor}
                          colorData={productState?.color}
                          selectedColor={selectedColor}
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  {alreadyAdded === false && (
                    <>
                      <h3 className="product-heading">Quantity : </h3>
                      <div className="">
                        <input
                          type="number"
                          name=""
                          min={1}
                          max={10}
                          className="form-control"
                          style={{ width: "63px" }}
                          id=""
                          onChange={(e) => setQuantity(e.target.value)}
                          value={quantity}
                        />
                      </div>
                    </>
                  )}
                  <div className={"d-flex align-items-center gap-30 ms-5"}>
                    {/* //alreadyAdded? "ms-0" : "ms-5" + */}
                    <button
                      className="button1 border-0"
                      type="button"
                      onClick={() => {
                        alreadyAdded ? navigate("/cart") : uploadCart();
                      }}
                    >
                      {alreadyAdded ? "Go To Cart" : "Add to Cart"}
                    </button>
                    <button className="button1 signup">Buy Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/compare">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/wishlist">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-15 flex-column my-3">
                  <div className="accordion d-flex align-items-center">
                    <li>
                      <input type="checkbox" className="accordion" id="first" />
                      <label className="label-colspan" for="first">
                        Delivery Information :{" "}
                      </label>
                      <p className="product-data">
                        We partner with trusted and reliable courier services to
                        ensure your order is delivered safely and on time. All
                        domestic orders are typically delivered within 4-8
                        business days, with deliveries taking place from Monday
                        to Saturday (excluding Sundays and public holidays).
                        Please note that delivery charges apply.
                        <br />
                        <br />
                        While we strive to accommodate any special delivery
                        instructions, doing so may cause slight delays beyond
                        our standard delivery timeframe.
                        <br />
                        We aim to meet our delivery deadlines, but unforeseen
                        circumstances may occasionally cause delays. If this
                        happens, we sincerely apologize and will work to get
                        your order to you as quickly as possible.
                      </p>
                    </li>
                  </div>
                </div>
                <div className="d-flex gap-15 flex-column my-3">
                  <div className="accordion d-flex align-items-center">
                    <li>
                      <input
                        type="checkbox"
                        className="accordion"
                        id="second"
                      />
                      <label className="label-colspan" for="second">
                        Size Chart :{" "}
                      </label>
                      <div className="content">
                        <img
                          src={sizechart}
                          alt="sizechart"
                          className="img-fluid"
                        />
                      </div>
                    </li>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Send a message </h3>

                  {/* <form
                    action="/submit"
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter please your name"
                      required
                    />

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter please your email address"
                      required
                    />

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter please your phone number"
                      required
                    />

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter please your message"
                      required
                    ></textarea>

                    {/* Image upload field
                    <label htmlFor="image" className="file-label">
                      Upload an image (optional):
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept="image/*"
                    />

                    <button type="submit">SUBMIT</button>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-12">
            <h4>Description & Product Information</h4>
            <div className="bg-white p-3">
              <p
                dangerouslySetInnerHTML={{ __html: productState?.description }}
              ></p>
              <p className="note">
                <strong>PLEASE NOTE -</strong> Please note that the actual
                product color may vary slightly from the image due to lighting
                conditions or differences in display settings. We appreciate
                your understanding, as achieving an exact color match in product
                images is beyond our control.
              </p>
            </div>
          </div>
        </div>
      </Container>
      {/* <section className='reviews-wrapper py-5 home-wrapper-4'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <div className='review-head d-flex justify-content-between align-items-end'>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      <Container class1="popular-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Dresses</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard data={popularProduct} />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;



// import React, { useEffect, useState } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import ProductCard from "../components/ProductCard";
// import ReactImageZoom from "react-image-zoom";
// import Color from "../components/Color";
// import { AiOutlineHeart } from "react-icons/ai";
// import { TbGitCompare } from "react-icons/tb";
// import sizechart from "../images/size-chart.jpg";
// import Container from "../components/Container";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAProduct } from "../features/products/productSlice";
// import { toast } from "react-toastify";
// import { addProductToCart, getUserCart } from "../features/user/userSlice";

// const SingleProduct = () => {
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [alreadyAdded, setAlreadyAdded] = useState(false);
//   const [popularProduct, setPopularProduct] = useState([]);

//   const location = useLocation();
//   const navigate = useNavigate();
//   const getProductId = location.pathname.split("/")[2];
//   const dispatch = useDispatch();
//   const productState = useSelector((state) => state?.product?.singleproduct);
//   const productsState = useSelector((state) => state?.product?.product);
//   const cartState = useSelector((state) => state?.auth?.cartProducts);
//   useEffect(() => {
//     dispatch(getAProduct(getProductId));
//     dispatch(getUserCart());
//   }, [dispatch, getProductId]);

//   useEffect(() => {
//     if (cartState && cartState.length > 0) {
//       for (let index = 0; index < cartState?.length; index++) {
//         if (getProductId === cartState[index]?.productId?._id) {
//           setAlreadyAdded(true);
//           break;
//         }
//       }
//     }
//   }, [cartState, getProductId]);

//   const uploadCart = () => {
//     if (selectedColor === null) {
//       toast.error("Please Choose Color");
//       return false;
//     } else if (selectedSize === null) {
//       toast.error("Please Choose Size");
//       return false;
//     } else {
//       dispatch(
//         addProductToCart({
//           productId: productState?._id,
//           quantity,
//           color: selectedColor,
//           size: selectedSize, // This is the selected size
//           price: productState?.price,
//         })
//       );
//       navigate("/cart");
//     }
//   };

//   const props = {
//     width: 400,
//     height: 600,
//     zoomWidth: 600,
//     img: productState?.images[0]?.url ? productState?.images[0]?.url : [],
//   };
//   // const catImageUrl = '../images/watch.jpg';

//   useEffect(() => {
//     let data = [];
//     for (let index = 0; index < productsState.length; index++) {
//       const element = productsState[index];
//       if (element.tags === "popular") {
//         data.push(element);
//       }
//       setPopularProduct(data);
//     }
//   }, [productsState]);

//   return (
//     <>
//       <Meta title={"Product Name"} />
//       <BreadCrumb title="Product Name" />

//       <Container class1="main-product-wrapper py-5 home-wrapper-4">
//         <div className="row">
//           <div className="col-6">
//             <div className="main-product-image">
//               <div>
//                 <ReactImageZoom {...props} />
//               </div>
//             </div>
//             <div className="other-product-images d-flex flex-wrap gap-15">
//               {productState?.images.map((item, index) => {
//                 return (
//                   <>
//                     <div>
//                       <img
//                         src={item?.url}
//                         className="img-other img-fluid"
//                         alt="pro-img"
//                       />
//                     </div>
//                     <div>
//                       <img
//                         src={item?.url}
//                         className="img-other img-fluid"
//                         alt="pro-img"
//                       />
//                     </div>
//                   </>
//                 );
//               })}
//             </div>
//           </div>
//           <div className="col-6">
//             <div className="main-product-details">
//               <div className="border-bottom">
//                 <h3 className="title">{productState?.title}</h3>
//               </div>
//               <div className="border-bottom py-3">
//                 <p className="price">LKR {productState?.price}</p>
//               </div>
//               <div className="py-3">
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Type : </h3>
//                   <p className="product-data">Prom Dress</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Category : </h3>
//                   <p className="product-data">{productState?.category}</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Tags : </h3>
//                   <p className="product-data">{productState?.tags}</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">SKU : </h3>
//                   <p className="product-data">{productState?.sku}</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Availability : </h3>
//                   <p className="product-data">In Stock</p>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center mt-2 mb-3">
//                   <h3 className="product-heading">Size : </h3>
//                   <div className="d-flex flex-wrap gap-15">
//                     {productState?.size?.map((size, index) => (
//                       <span
//                         key={index}
//                         className={`badge border border-1 bg-white text-dark border-secondary ${
//                           selectedSize === size ? "active" : ""
//                         }`}
//                         onClick={() => setSelectedSize(size)} // Set selected size
//                         style={{ cursor: "pointer" }}
//                       >
//                         {size}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {alreadyAdded === false && (
//                   <>
//                     <div className="d-flex gap-10 align-items-center mt-2 mb-3">
//                       <h3 className="product-heading">Color : </h3>
//                       <div className="product-color">
//                         <Color
//                           setColor={setSelectedColor}
//                           colorData={productState?.color}
//                           selectedColor={selectedColor}
//                         />
//                       </div>
//                     </div>
//                   </>
//                 )}

//                 <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
//                   {alreadyAdded === false && (
//                     <>
//                       <h3 className="product-heading">Quantity : </h3>
//                       <div className="">
//                         <input
//                           type="number"
//                           name=""
//                           min={1}
//                           max={10}
//                           className="form-control"
//                           style={{ width: "63px" }}
//                           id=""
//                           onChange={(e) => setQuantity(e.target.value)}
//                           value={quantity}
//                         />
//                       </div>
//                     </>
//                   )}
//                   <div className={"d-flex align-items-center gap-30 ms-5"}>
//                     {/* //alreadyAdded? "ms-0" : "ms-5" + */}
//                     <button
//                       className="button1 border-0"
//                       type="button"
//                       onClick={() => {
//                         alreadyAdded ? navigate("/cart") : uploadCart();
//                       }}
//                     >
//                       {alreadyAdded ? "Go To Cart" : "Add to Cart"}
//                     </button>
//                     <button className="button1 signup">Buy Now</button>
//                   </div>
//                 </div>
//                 <div className="d-flex align-items-center gap-15">
//                   <div>
//                     <a href="/compare">
//                       <TbGitCompare className="fs-5 me-2" /> Add to Compare
//                     </a>
//                   </div>
//                   <div>
//                     <a href="/wishlist">
//                       <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
//                     </a>
//                   </div>
//                 </div>
//                 <div className="d-flex gap-15 flex-column my-3">
//                   <div className="accordion d-flex align-items-center">
//                     <li>
//                       <input type="checkbox" className="accordion" id="first" />
//                       <label className="label-colspan" for="first">
//                         Delivery Information :{" "}
//                       </label>
//                       <p className="product-data">
//                         We partner with trusted and reliable courier services to
//                         ensure your order is delivered safely and on time. All
//                         domestic orders are typically delivered within 4-8
//                         business days, with deliveries taking place from Monday
//                         to Saturday (excluding Sundays and public holidays).
//                         Please note that delivery charges apply.
//                         <br />
//                         <br />
//                         While we strive to accommodate any special delivery
//                         instructions, doing so may cause slight delays beyond
//                         our standard delivery timeframe.
//                         <br />
//                         We aim to meet our delivery deadlines, but unforeseen
//                         circumstances may occasionally cause delays. If this
//                         happens, we sincerely apologize and will work to get
//                         your order to you as quickly as possible.
//                       </p>
//                     </li>
//                   </div>
//                 </div>
//                 <div className="d-flex gap-15 flex-column my-3">
//                   <div className="accordion d-flex align-items-center">
//                     <li>
//                       <input
//                         type="checkbox"
//                         className="accordion"
//                         id="second"
//                       />
//                       <label className="label-colspan" for="second">
//                         Size Chart :{" "}
//                       </label>
//                       <div className="content">
//                         <img
//                           src={sizechart}
//                           alt="sizechart"
//                           className="img-fluid"
//                         />
//                       </div>
//                     </li>
//                   </div>
//                 </div>
//                 <div className="d-flex gap-10 align-items-center my-2">
//                   <h3 className="product-heading">Send a message </h3>

//                   {/* <form
//                     action="/submit"
//                     method="POST"
//                     enctype="multipart/form-data"
//                   >
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       placeholder="Enter please your name"
//                       required
//                     />

//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       placeholder="Enter please your email address"
//                       required
//                     />

//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       placeholder="Enter please your phone number"
//                       required
//                     />

//                     <textarea
//                       id="message"
//                       name="message"
//                       placeholder="Enter please your message"
//                       required
//                     ></textarea>

//                     {/* Image upload field
//                     <label htmlFor="image" className="file-label">
//                       Upload an image (optional):
//                     </label>
//                     <input
//                       type="file"
//                       id="image"
//                       name="image"
//                       accept="image/*"
//                     />

//                     <button type="submit">SUBMIT</button>
//                   </form> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//       <Container class1="description-wrapper py-5 home-wrapper-4">
//         <div className="row">
//           <div className="col-12">
//             <h4>Description & Product Information</h4>
//             <div className="bg-white p-3">
//               <p
//                 dangerouslySetInnerHTML={{ __html: productState?.description }}
//               ></p>
//               <p className="note">
//                 <strong>PLEASE NOTE -</strong> Please note that the actual
//                 product color may vary slightly from the image due to lighting
//                 conditions or differences in display settings. We appreciate
//                 your understanding, as achieving an exact color match in product
//                 images is beyond our control.
//               </p>
//             </div>
//           </div>
//         </div>
//       </Container>
//       {/* <section className='reviews-wrapper py-5 home-wrapper-4'>
//       <div className='container-xxl'>
//         <div className='row'>
//           <div className='col-12'>
//             <div className='review-head d-flex justify-content-between align-items-end'>
//               <div></div>
//               <div></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section> */}
//       <Container class1="popular-wrapper py-5 home-wrapper-4">
//         <div className="row">
//           <div className="col-12">
//             <h3 className="section-heading">Our Popular Dresses</h3>
//           </div>
//         </div>
//         <div className="row">
//           <ProductCard data={popularProduct} />
//         </div>
//       </Container>
//     </>
//   );
// };

// export default SingleProduct;
