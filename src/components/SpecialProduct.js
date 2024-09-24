import React from 'react'

const SpecialProduct = () => {
  return (
    <div className='col-4'>
        <div className='special-product-card'>
            <div className='d-flex justify-content-between'>
                <div className='special-product-image'>
                    <img 
                      src='images/watch.jpg' 
                      className='img-fluid' 
                      alt='watch'
                    />
                </div>
                <div className='special-product-content'>
                    <h5 className='brand'>Frock</h5>
                    <h6 className='title'>
                        My special frock collection....
                    </h6>
                    <p className='price'>
                        <span className='red-p'>4500/=</span> &nbsp; <strike>5000/=</strike>
                    </p>
                    <div className='discount-till d-flex align-items-center gap-10'>
                        <p className='mb-0' style={{ whiteSpace: 'nowrap' }}>
                            <b>5 </b>days
                        </p>
                        <div className='d-flex gap-10 align-items-center'>
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>:
                            <span className='badge rounded-circle p-3 bg-warning'>1</span>
                        </div>
                    </div>
                    <div className='prod-count mt-3'>
                            <p>Products: 5</p>
                            <div className="progress">
                              <div 
                                className="progress-bar" 
                                role="progressbar" 
                                style={{ width: '25%' }} 
                                aria-valuenow="25" 
                                aria-valuemin="0" 
                                aria-valuemax="100">                      
                              </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpecialProduct