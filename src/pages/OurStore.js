import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
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
                    <li>Prom Dresses</li>
                    <li>Party Frocks</li>
                    <li>Cocktail Frocks</li>
                    <li>Office Wears</li>
                    <li>Casual Wears</li>
                    <li>Tops & Shirts</li>
                    <li>Maternity Prom Dresses</li>
                    <li>Pants & Jumpsuits</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="From"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating ">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Color />
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div className="row">
                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-xs"
                        />
                        <label className="form-check-label" htmlFor="size-xs">
                          XS
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-s"
                        />
                        <label className="form-check-label" htmlFor="size-s">
                          S
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-m"
                        />
                        <label className="form-check-label" htmlFor="size-m">
                          M
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-l"
                        />
                        <label className="form-check-label" htmlFor="size-l">
                          L
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-xl"
                        />
                        <label className="form-check-label" htmlFor="size-xl">
                          XL
                        </label>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-2xl"
                        />
                        <label className="form-check-label" htmlFor="size-2xl">
                          2XL
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-3xl"
                        />
                        <label className="form-check-label" htmlFor="size-3xl">
                          3XL
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-4xl"
                        />
                        <label className="form-check-label" htmlFor="size-4xl">
                          4XL
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="size-5xl"
                        />
                        <label className="form-check-label" htmlFor="size-5xl">
                          5XL
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="size-chart">
                    <h6>Size Chart</h6>
                    <img src="images/size-chart.jpg" alt="size-chart" />
                  </div>
                </div>
              </div>
              {/* <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                           Product Tags
                        </h3>
                    </div>
                    <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                        <span className='badge bg-secondary rounded-3 py-3 px-3'></span>
                    </div> */}
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div className="random-products mb-3 d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Grand party occational frock</h5>
                    <b>4500/=</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch.jpg"
                      className="img-fluid"
                      alt="watch"
                    />
                  </div>
                  <div className="w-50">
                    <h5>Grand party occational frock</h5>
                    <b>4500/=</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0 d-block" style={{ width: "100px" }}>Sort By:</p>
                  <select name="" className="form-control form-select" id="">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">
                      Best selling
                    </option>
                    <option value="title-ascending">Alphabetically, A-Z</option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">Price, low to high</option>
                    <option value="price-descending">Price, high to low</option>
                    <option value="created-ascending">Date, old to new</option>
                    <option value="created-descending">Date, new to old</option>
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
                   <ProductCard grid={grid} />
                 </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default OurStore;
