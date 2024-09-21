import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='home-wrapper-1 py-0'>
         <div className='main-banners'>
         <Link className='button' >
                <img 
                   src='images/main-banner.jpg' 
                   className='img-fluid rounded-3'  
                   alt='main-banner'
                />
             </Link> 
          </div>    
            {/* <div className='col-4'>
              <div className='d-flex flex-wrap justify-content-between align-items-center'>
              <div className='main-banner position-relative p-3' style={{ backgroundColor: 'green',  paddingLeft: '-30px', marginLeft: '-40px' }}>
                <img 
                   src='images/main-banner-1.jpg' 
                   className='img-fluid rounded-3'  
                   alt='main-banner'
                />
                 <div className='small-banner-content position-absolute'>
                  <h4>FASHION</h4>
                  <h5>FOR <br/> HER</h5>
                  <p></p>
                  <Link className='button'>BUY NOW</Link>
                 </div>
              </div>
              </div>  */}
            {/* </div>

          </div> */}
         {/* </div> */}
      </section>
      <section className='home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-10'>
                   <img src='images/service.png' alt='services' />
                     <div>
                        <h6>Free Shipping</h6>
                        <p className='mb-0'>From all orders over Rs.10000/=</p>
                     </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                   <img src='images/service-02.png' alt='services' />
                     <div>
                        <h6>Daily Surprise Offers</h6>
                        <p className='mb-0'>Save upto 15% off</p>
                     </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                   <img src='images/service-03.png' alt='services' />
                     <div>
                        <h6>Support 24/7</h6>
                        <p className='mb-0'>Shop with an expert</p>
                     </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                   <img src='images/service-04.png' alt='services' />
                     <div>
                        <h6>Affordable Prices</h6>
                        <p className='mb-0'>Get Factory Default Price</p>
                     </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                   <img src='images/service-05.png' alt='services' />
                     <div>
                        <h6>Secure Payments</h6>
                        <p className='mb-0'>100% Protected Pyment</p>
                     </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='home-wrapper-3 py-5'>
      <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                <div className='gap align-items-cente'>
                  <img 
                    src='images/prom-dress.jpg' 
                    alt='prom-dress' 
                    className='category' 
                  />
                  <div className='category-name'>
                    <h6>Prom Dresses</h6>
                    <p></p>
                  </div>
                </div>
                <div className='gap align-items-center'>
                  <img 
                    src='images/party-frock.jpg' 
                    alt='party-frock' 
                    className='category' 
                  />
                  <div className='category-name'>
                    <h6>Party Frocks</h6>
                    <p></p>
                  </div>
                </div>
                <div className='gap align-items-center'>
                  <img 
                    src='images/cocktail-dress.jpg' 
                    alt='cocktail-dress' 
                    className='category' 
                  />
                  <div className='category-name'>
                    <h6>Cocktail Frocks</h6>
                    <p></p>
                  </div>
                </div>
                <div className='gap align-items-center'>
                  <img 
                    src='images/office-wear.jpg' 
                    alt='office-wear' 
                    className='category' 
                  />
                  <div className='category-name'>
                    <h6>Office Wears</h6>
                    <p></p>
                  </div>
                </div>
                <div className='gap align-items-center'>
                  <img 
                    src='images/normal-frock.jpg' 
                    alt='normal-frock' 
                    className='category' 
                  />
                  <div className='category-name'>
                    <h6>Casual Wears</h6>
                    <p></p>
                  </div>
                </div>
                <div className='gap align-items-center'>
                  <img 
                    src='images/tops.jpg' 
                    alt='tops' 
                    className='category' 
                  />
                  <div className='category-name'>
                    <h6>Tops & Shirts</h6>
                    <p></p>
                  </div>
                </div>
                <div className='gap align-items-center'>
                  <img 
                    src='images/pant.jpg' 
                    alt='pant' 
                    className='category' 
                  />
                  <div className='category-name'>
                    <h6>Pants</h6>
                    <p></p>
                  </div>
                </div>
                <div className='gap align-items-center'>
                  <img 
                    src='images/jumpsuit.jpg' 
                    alt='jumpsuit' 
                    className='category' 
                  />
                  <div className='category-name'>
                    <h6>Jumpsuits</h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </section>
    </>
  )
}

export default Home