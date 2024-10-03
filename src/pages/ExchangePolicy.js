import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

const ExchangePolicy = () => {
  return (
    <>
    <Meta title={"Exchange Policy"} />
    <BreadCrumb title="Exchange Policy" />
    <section className='policy-wrapper py-5 home-wrapper-4'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'></div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default ExchangePolicy