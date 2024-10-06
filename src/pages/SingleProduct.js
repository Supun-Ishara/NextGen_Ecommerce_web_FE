import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
// import watch from "../images/watch.jpg";
import Color from "../components/Color";
import { AiOutlineHeart } from "react-icons/ai";
import { TbGitCompare } from "react-icons/tb";
import sizechart from "../images/size-chart.jpg";
import Container from "../components/Container";
//import ReactImageMagnify from 'react-image-magnify';

const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://calabro.com.au/cdn/shop/products/lace-v-back-chiffon-bridesmaid-dresses-566321_800x800.webp?v=1704183427",
  };
  // const catImageUrl = '../images/watch.jpg';
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />

      <Container class1="main-product-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />

                {/* <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: catImageUrl
    },
    largeImage: {
        src: catImageUrl,
        width: 1200,
        height: 1800
    }
}} /> */}
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://calabro.com.au/cdn/shop/products/lace-v-back-chiffon-bridesmaid-dresses-566321_800x800.webp?v=1704183427"
                  className="img-other img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://calabro.com.au/cdn/shop/products/lace-v-back-chiffon-bridesmaid-dresses-566321_800x800.webp?v=1704183427"
                  className="img-other img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Round Neck Three Quarter Sleeve Shift Dress
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">LKR 4,500.00</p>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type : </h3>
                  <p className="product-data">Prom Dress</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category : </h3>
                  <p className="product-data">Frock</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">SKU : </h3>
                  <p className="product-data">XEZZ80044-S</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability : </h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Size : </h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XS
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      2XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      3XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      4XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      5XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 align-items-center mt-2 mb-3">
                  <h3 className="product-heading">Color : </h3>
                  <div className="product-color">
                    <Color />
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
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
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button1 border-0" type="submit">
                      Add to Cart
                    </button>
                    <button className="button1 signup">Buy Now</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" /> Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-15 flex-column my-3">
                  <div className="accordion d-flex align-items-center">
                    <li>
                      <input type="checkbox" className="accordion" id="first" />
                      <label for="first">Delivery Information : </label>
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
                      <label for="second">Size Chart : </label>
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
              <p>
                Elevate your style with our stunning party frock, designed to
                make you shine at every special occasion. Crafted from
                premium-quality fabric, this elegant dress features a flattering
                silhouette that hugs your curves perfectly. With intricate
                detailing, a stylish neckline, and a flowy skirt, this frock is
                the epitome of grace and sophistication. Perfect for weddings,
                cocktail parties, or any festive event, it ensures you stand out
                in the crowd.
              </p>
              <ul className="product-details">
                <li>Round-neck Midi</li>
                <li>Sleeveless</li>
                <li>Ruffles attached on</li>
                <li>Fabric : Linen</li>
                <li>Model Wears : UK 10 (M)</li>
                <li>Base Color : Royal Blue</li>
              </ul>

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
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
