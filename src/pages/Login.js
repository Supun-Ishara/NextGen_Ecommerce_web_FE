import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
          <Meta title={"Login"} />
          <BreadCrumb title="Login" />
          <div className='login-wrapper py-5 home-wrapper-4'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Login</h3>
                        <form action='' className='d-flex flex-colunm gap-30'>
                            <div>
                            <input 
                               type='email' 
                               name='email' 
                               placeholder='Email' 
                               className='form-control' 
                            />
                            </div>
                            <div>
                            <input 
                               type='password' 
                               name='password' 
                               placeholder='Password' 
                               className='form-control' 
                            />
                            </div>
                            <div>
                                <Link to="/forgot-password">Forgot Password</Link>
                                <div className='d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button1 border-0'>Login</button>
                                    <Link className="button1 signup">SignUp</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          </div>
    </>
  )
}

export default Login