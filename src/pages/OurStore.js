import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";
import Size from "../components/Size";

const OurStore = () => {
  const [grid, setGrid] = useState(4);

  //const dispatch = useDispatch();
  const productState = useSelector((state) => state?.product?.product);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [sizes, setSizes] = useState([]);

  //filter state
  const [tag, setTag] = useState(null);
  const [category, setCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);
  const [sort, setSort] = useState(null);

  console.log(maxPrice);

  useEffect(() => {
    let category = [];
    let newtags = [];
    let newSizes = [];
    for (let index = 0; index < productState.length; index++) {
      const element = productState[index];
      category.push(element.category);
      newtags.push(element.tags);
      newSizes.push(element.size);
    }
    setCategories(category);
    setTags(newtags);
    setSizes(newSizes);
  }, [productState]);

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, [sort, tag, category, minPrice, maxPrice]);
  const getProducts = () => {
    dispatch(getAllProducts({ sort, tag, category, minPrice, maxPrice }));
  };

  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our Store" />
      <Container class1="store-wrapper home-wrapper-4 py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  {categories &&
                    [...new Set(categories)].map((item, index) => {
                      return (
                        <li key={index} onClick={() => setCategory(item)}>
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
              <div className="mt-4 mb-3">
                <h3 className="sub-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    {tags &&
                      [...new Set(tags)].map((item, index) => {
                        return (
                          <span
                            onClick={() => setTag(item)}
                            key={index}
                            className="text-capitalize badge bg-light text-secondary rounded-3 py-3 px-3"
                            style={{ cursor: "pointer" }}
                          >
                            {item}
                          </span>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating ">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                      // onChange={(e) => setMinPrice(e.target.value)}
                      onChange={(e) => setMinPrice(Number(e.target.value))}
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating ">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                      // onChange={(e) => setMaxPrice(e.target.value)}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />
                    <label htmlFor="floatingInput1">To</label>
                  </div>
                </div>
                {/* <h5 className="sub-title">Colors</h5>
                <div>
                  <Color />
                </div> */}

                <h5 className="sub-title">Size</h5>
                <div className="size-selector">
                  <Size
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    sizes={[...new Set(sizes)]}
                  />
                </div>
                <div className="size-chart">
                  <h6>Size Chart</h6>
                  <img src="images/size-chart.jpg" alt="size-chart" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>
                    Sort By:
                  </p>
                  <select
                    name=""
                    defaultValue={"manula"}
                    className="form-control form-select"
                    id=""
                    onChange={(e) => setSort(e.target.value)}
                  >
                    {/* <option value="manual">Featured</option>
                    <option value="best-selling">Best selling</option> */}
                    <option value="title">Alphabetically, A-Z</option>
                    <option value="-title">Alphabetically, Z-A</option>
                    <option value="price">Price, low to high</option>
                    <option value="-price">Price, high to low</option>
                    <option value="createdAt">Date, old to new</option>
                    <option value="-createdAt">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 products</p>
                  <div className="d-flex gap-10 align-items-center grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      className="d-block img-fluid"
                      alt="grid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="products-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
                {/* <ProductCard
                  data={productState ? productState : []}
                  grid={grid}
                /> */}
                <ProductCard
                  data={Array.isArray(productState) ? productState : []}
                  grid={grid}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;

// import React, { useEffect } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import { useState } from "react";
// import ProductCard from "../components/ProductCard";
// import Color from "../components/Color";
// import Container from "../components/Container";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllProducts } from "../features/products/productSlice";

// const OurStore = () => {
//   const [grid, setGrid] = useState(4);

//   //const dispatch = useDispatch();
//   const productState = useSelector((state) => state?.product?.product);
//   //const productState = useSelector((state) => state.product.product);
//   const [categories, setCategories] = useState([]);
//   const [tags, setTags] = useState([]);
//   const [sizes, setSizes] = useState([]);

//   //filter state
//   const [tag, setTag] = useState([]);
//   const [category, setCategory] = useState([]);
//   const [size, setSize] = useState([]);

//   useEffect(() => {
//     let category = [];
//     let newtags = [];
//     let newSizes = [];
//     for (let index = 0; index < productState.length; index++) {
//       const element = productState[index];
//       category.push(element.category);
//       newtags.push(element.tags);
//       newSizes.push(element.size);
//     }
//     setCategories(category);
//     setTags(newtags);
//     setSizes(newSizes)
//   }, [productState]);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     getProducts();
//   }, []);
//   const getProducts = () => {
//     dispatch(getAllProducts());
//   };

//   // useEffect(() => {
//   //   dispatch(getAllProducts());
//   // }, [dispatch]);

//   return (
//     <>
//       <Meta title={"Our Store"} />
//       <BreadCrumb title="Our Store" />
//       <Container class1="store-wrapper home-wrapper-4 py-5">
//         <div className="row">
//           <div className="col-3">
//             <div className="filter-card mb-3">
//               <h3 className="filter-title">Shop By Categories</h3>
//               <div>
//                 <ul className="ps-0">
//                   {categories &&
//                     [...new Set(categories)].map((item, index) => {
//                       return (
//                         <li key={index} onClick={() => setCategory(item)}>
//                           {item}
//                         </li>
//                       );
//                     })}
//                   {/* <li>Prom Dresses</li>
//                   <li>Party Frocks</li>
//                   <li>Cocktail Frocks</li>
//                   <li>Office Wears</li>
//                   <li>Casual Wears</li>
//                   <li>Tops & Shirts</li>
//                   <li>Maternity Prom Dresses</li>
//                   <li>Pants & Jumpsuits</li> */}
//                 </ul>
//               </div>
//             </div>
//             <div className="filter-card mb-3">
//               <h3 className="filter-title">Filter By</h3>
//               <div>
//                 {/* <h5 className="sub-title">Availability</h5>
//                 <div>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id=""
//                     />
//                     <label className="form-check-label" htmlFor="">
//                       In Stock (1)
//                     </label>
//                   </div>
//                   <div className="form-check">
//                     <input
//                       className="form-check-input"
//                       type="checkbox"
//                       value=""
//                       id=""
//                     />
//                     <label className="form-check-label" htmlFor="">
//                       Out of Stock (0)
//                     </label>
//                   </div>
//                 </div> */}
//                 <h5 className="sub-title">Price</h5>
//                 <div className="d-flex align-items-center gap-10">
//                   <div className="form-floating ">
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="floatingInput"
//                       placeholder="From"
//                     />
//                     <label htmlFor="floatingInput">From</label>
//                   </div>
//                   <div className="form-floating ">
//                     <input
//                       type="number"
//                       className="form-control"
//                       id="floatingInput1"
//                       placeholder="To"
//                     />
//                     <label htmlFor="floatingInput1">To</label>
//                   </div>
//                 </div>
//                 <h5 className="sub-title">Colors</h5>
//                 <div>
//                   <Color />
//                 </div>
//                 <h5 className="sub-title">Size</h5>
//                 <div className="row">
//                   <div className="col-6">
//                   {sizes &&
//                     [...new Set(sizes)].map((item, index) => {
//                       return (
//                         <span
//                           onClick={() => setSize(item)}
//                           key={index}
//                           className="text-capitalize badge bg-light text-secondary rounded-3 py-3 px-3"
//                           style={{ cursor: "pointer" }}
//                         >
//                           {item}
//                         </span>
//                       );
//                     })}

//                     {/* <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-xs"
//                       />
//                       <label className="form-check-label" htmlFor="size-xs">
//                         XS
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-s"
//                       />
//                       <label className="form-check-label" htmlFor="size-s">
//                         S
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-m"
//                       />
//                       <label className="form-check-label" htmlFor="size-m">
//                         M
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-l"
//                       />
//                       <label className="form-check-label" htmlFor="size-l">
//                         L
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-xl"
//                       />
//                       <label className="form-check-label" htmlFor="size-xl">
//                         XL
//                       </label>
//                     </div> */}
//                   </div>

//                   {/* <div className="col-6">
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-2xl"
//                       />
//                       <label className="form-check-label" htmlFor="size-2xl">
//                         2XL
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-3xl"
//                       />
//                       <label className="form-check-label" htmlFor="size-3xl">
//                         3XL
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-4xl"
//                       />
//                       <label className="form-check-label" htmlFor="size-4xl">
//                         4XL
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id="size-5xl"
//                       />
//                       <label className="form-check-label" htmlFor="size-5xl">
//                         5XL
//                       </label>
//                     </div>
//                   </div> */}
//                 </div>
//                 <div className="size-chart">
//                   <h6>Size Chart</h6>
//                   <img src="images/size-chart.jpg" alt="size-chart" />
//                 </div>
//               </div>
//             </div>

//             <div className="filter-card mb-3">
//               <h3 className="filter-title">Product Tags</h3>
//               <div>
//                 <div className="product-tags d-flex flex-wrap align-items-center gap-10">
//                   {tags &&
//                     [...new Set(tags)].map((item, index) => {
//                       return (
//                         <span
//                           onClick={() => setTag(item)}
//                           key={index}
//                           className="text-capitalize badge bg-light text-secondary rounded-3 py-3 px-3"
//                           style={{ cursor: "pointer" }}
//                         >
//                           {item}
//                         </span>
//                       );
//                     })}
//                 </div>
//               </div>
//             </div>
//             {/* <div className="filter-card mb-3">
//               <h3 className="filter-title">Random Product</h3>
//               <div className="random-products mb-3 d-flex">
//                 <div className="w-50">
//                   <img
//                     src="images/watch.jpg"
//                     className="img-fluid"
//                     alt="watch"
//                   />
//                 </div>
//                 <div className="w-50">
//                   <h5>Grand party occational frock</h5>
//                   <b>4500/=</b>
//                 </div>
//               </div>
//               <div className="random-products d-flex">
//                 <div className="w-50">
//                   <img
//                     src="images/watch.jpg"
//                     className="img-fluid"
//                     alt="watch"
//                   />
//                 </div>
//                 <div className="w-50">
//                   <h5>Grand party occational frock</h5>
//                   <b>4500/=</b>
//                 </div>
//               </div>
//             </div> */}
//           </div>
//           <div className="col-9">
//             <div className="filter-sort-grid mb-4">
//               <div className="d-flex justify-content-between align-items-center">
//                 <div className="d-flex align-items-center gap-10">
//                   <p className="mb-0 d-block" style={{ width: "100px" }}>
//                     Sort By:
//                   </p>
//                   <select name="" className="form-control form-select" id="">
//                     <option value="manual">Featured</option>
//                     <option value="best-selling">Best selling</option>
//                     <option value="title-ascending">Alphabetically, A-Z</option>
//                     <option value="title-descending">
//                       Alphabetically, Z-A
//                     </option>
//                     <option value="price-ascending">Price, low to high</option>
//                     <option value="price-descending">Price, high to low</option>
//                     <option value="created-ascending">Date, old to new</option>
//                     <option value="created-descending">Date, new to old</option>
//                   </select>
//                 </div>
//                 <div className="d-flex align-items-center gap-10">
//                   <p className="totalproducts mb-0">21 products</p>
//                   <div className="d-flex gap-10 align-items-center grid">
//                     <img
//                       onClick={() => {
//                         setGrid(3);
//                       }}
//                       src="images/gr4.svg"
//                       className="d-block img-fluid"
//                       alt="grid"
//                     />
//                     <img
//                       onClick={() => {
//                         setGrid(4);
//                       }}
//                       src="images/gr3.svg"
//                       className="d-block img-fluid"
//                       alt="grid"
//                     />
//                     <img
//                       onClick={() => {
//                         setGrid(6);
//                       }}
//                       src="images/gr2.svg"
//                       className="d-block img-fluid"
//                       alt="grid"
//                     />
//                     <img
//                       onClick={() => {
//                         setGrid(12);
//                       }}
//                       src="images/gr.svg"
//                       className="d-block img-fluid"
//                       alt="grid"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="products-list pb-5">
//               <div className="d-flex gap-10 flex-wrap">
//                 <ProductCard
//                   data={productState ? productState : []}
//                   grid={grid}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default OurStore;
