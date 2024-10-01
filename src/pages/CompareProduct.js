import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from '../components/Color';

const CompareProduct = () => {
  return (
    <>
          <Meta title={"Compare Products"} />
          <BreadCrumb title="Compare Products" />
          <div className='compare-product-wrapper py-5 home-wrapper-4'>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img 
                              src='images/cross.svg' 
                              alt='cross' 
                              className='position-absolute cross img-fluid' 
                            />
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' alt='watch' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                   Designed to add that extra sparkle to your celebrations.
                                </h5>
                                <h6 className='price mb-3 mt-3'>4500rs</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p>Party Frock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail1'>
                                        <h5>Color:</h5>
                                        <div className='d-flex'>
                                        <Color />
                                        </div>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='size-guide d-flex gap-10'>
                                            <p>Size Guide</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img 
                              src='images/cross.svg' 
                              alt='cross' 
                              className='position-absolute cross img-fluid' 
                            />
                            <div className='product-card-image'>
                                <img src='images/watch.jpg' alt='watch' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                   Designed to add that extra sparkle to your celebrations.
                                </h5>
                                <h6 className='price mb-3 mt-3'>4500rs</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Type:</h5>
                                        <p>Party Frock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availability:</h5>
                                        <p>In Stock</p>
                                    </div>
                                    <div className='product-detail1'>
                                        <h5>Color:</h5>
                                        <div className='d-flex'>
                                        <Color />
                                        </div>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Size:</h5>
                                        <div className='size-guide d-flex gap-10'>
                                            <p>Size Guide</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
    </>
  )
}

export default CompareProduct