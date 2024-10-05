import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from '../components/Container';

const ExchangePolicy = () => {
  return (
    <>
    <Meta title={"Exchange Policy"} />
    <BreadCrumb title="Exchange Policy" />
    <Container class1='policy-wrapper py-5 home-wrapper-4'>
            <div className='row'>
                <div className='col-12'>
                    <div className='policy'></div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default ExchangePolicy