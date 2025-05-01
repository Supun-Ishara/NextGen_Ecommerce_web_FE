// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import Container from "../components/Container";
// import CustomInput from "../components/CustomInput";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch } from "react-redux";
// import { registerUser } from "../features/user/userSlice";
// import { Link } from "react-router-dom";

// const signUpSchema = yup.object({
//   firstName: yup.string().required("First Name is Required."),
//   lastName: yup.string().required("Last Name is Required."),
//   email: yup
//     .string()
//     .required("Email Address is Required.")
//     .email("Email Should be valid"),
//   mobile: yup.string().required("Mobile No is Required."),
//   password: yup.string().required("Password is Required."),
// });

// const Signup = () => {
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       mobile: "",
//       password: "",
//     },
//     validationSchema: signUpSchema,
//     onSubmit: (values) => {
//       dispatch(registerUser(values));
//     },
//   });
//   return (
//     <>
//       <Meta title={"Sign Up"} />
//       <BreadCrumb title="Sign Up" />

//       <Container class1="login-wrapper py-5 home-wrapper-4">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Sign Up</h3>
//               <form
//                 action=""
//                 onSubmit={formik.handleSubmit}
//                 className="d-flex flex-column gap-15"
//               >
//                 <CustomInput
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={formik.values.firstName}
//                   onChange={formik.handleChange("firstName")}
//                   onBlur={formik.handleBlur("firstName")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.firstName && formik.errors.firstName}
//                 </div>
//                 <CustomInput
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={formik.values.lastName}
//                   onChange={formik.handleChange("lastName")}
//                   onBlur={formik.handleBlur("lastName")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.lastName && formik.errors.lastName}
//                 </div>
//                 <CustomInput
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange("email")}
//                   onBlur={formik.handleBlur("email")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.email && formik.errors.email}
//                 </div>
//                 <CustomInput
//                   type="tel"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   value={formik.values.mobile}
//                   onChange={formik.handleChange("mobile")}
//                   onBlur={formik.handleBlur("mobile")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.mobile && formik.errors.mobile}
//                 </div>
//                 <CustomInput
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange("password")}
//                   onBlur={formik.handleBlur("password")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.password && formik.errors.password}
//                 </div>
//                 <div>
//                   <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
//                     {/* <button className="button1 border-0">Sign Up</button> */}
//                     <button to="/login" className="button1 border-0">Sign Up</button>
//                     {/* <Link className="button1 border-0" to="/login">Sign Up</Link> */}
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Signup;







import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const signUpSchema = yup.object({
  firstName: yup.string().required("First Name is Required."),
  lastName: yup.string().required("Last Name is Required."),
  email: yup
    .string()
    .required("Email Address is Required.")
    .email("Email Should be valid"),
  mobile: yup.string().required("Mobile No is Required."),
  password: yup.string().required("Password is Required."),
});

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  // Create local state for form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  
  // Handle form submission
  const handleSignupSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      setFormError(null);
      
      // Dispatch the registration action
      const result = await dispatch(registerUser(values));
      
      // Check if registration was successful
      if (!result.error) {
        // If successful, navigate to login page
        navigate('/login?registered=success');
      } else {
        // If error, show error message
        setFormError(result.error?.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      // Handle any unexpected errors
      setFormError("An unexpected error occurred. Please try again.");
    } finally {
      // Always set submitting to false when done
      setIsSubmitting(false);
    }
  };
  
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: handleSignupSubmit,
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />

      <Container class1="login-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Sign Up</h3>
              {formError && <div className="alert alert-danger">{formError}</div>}
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange("firstName")}
                  onBlur={formik.handleBlur("firstName")}
                />
                <div className="error-message">
                  {formik.touched.firstName && formik.errors.firstName}
                </div>
                <CustomInput
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange("lastName")}
                  onBlur={formik.handleBlur("lastName")}
                />
                <div className="error-message">
                  {formik.touched.lastName && formik.errors.lastName}
                </div>
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error-message">
                  {formik.touched.email && formik.errors.email}
                </div>
                <CustomInput
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formik.values.mobile}
                  onChange={formik.handleChange("mobile")}
                  onBlur={formik.handleBlur("mobile")}
                />
                <div className="error-message">
                  {formik.touched.mobile && formik.errors.mobile}
                </div>
                {/* <CustomInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                />
                <div className="error-message">
                  {formik.touched.password && formik.errors.password}
                </div> */}

                {/* Password input with toggle icon in the middle */}
                <div className="position-relative">
                  <CustomInput
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={formik.values.password}
                    onChange={formik.handleChange("password")}
                    onBlur={formik.handleBlur("password")}
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="btn position-absolute border-0 bg-transparent"
                    style={{ 
                      top: "50%", 
                      left: "93%", 
                      transform: "translate(-50%, -50%)", 
                      zIndex: "10"
                    }}
                  >
                    {showPassword ? (
                      <FaEye />
                    ) : (
                      <FaEyeSlash />
                    )}
                  </button>
                </div>
                <div className="error-message text-danger">
                  {formik.touched.password && formik.errors.password}
                </div>

                <div>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button type="submit" className="button1 border-0" disabled={isSubmitting}>
                      {isSubmitting ? "Signing Up..." : "Sign Up"}
                    </button>
                    <Link to="/login" className="text-dark">Already have an account?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;







// import React, { useEffect, useState } from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import Container from "../components/Container";
// import CustomInput from "../components/CustomInput";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../features/user/userSlice";
// import { Link, useNavigate } from "react-router-dom";

// const signUpSchema = yup.object({
//   firstName: yup.string().required("First Name is Required."),
//   lastName: yup.string().required("Last Name is Required."),
//   email: yup
//     .string()
//     .required("Email Address is Required.")
//     .email("Email Should be valid"),
//   mobile: yup.string().required("Mobile No is Required."),
//   password: yup.string().required("Password is Required."),
// });

// const Signup = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   // Access Redux store
//   const userState = useSelector((state) => state.user);
  
//   // Create local state to handle form submission
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formError, setFormError] = useState(null);
  
//   // Handle form submission result
//   useEffect(() => {
//     if (isSubmitting && userState) {
//       if (userState.createdUser || (userState.user && !userState.isError)) {
//         // Successfully registered
//         setIsSubmitting(false);
//         navigate('/login');
//       } else if (userState.isError) {
//         // Registration failed
//         setIsSubmitting(false);
//         setFormError("Registration failed. Please try again.");
//       }
//     }
//   }, [userState, isSubmitting, navigate]);
  
//   const formik = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       email: "",
//       mobile: "",
//       password: "",
//     },
//     validationSchema: signUpSchema,
//     onSubmit: (values) => {
//       setIsSubmitting(true);
//       setFormError(null);
//       dispatch(registerUser(values));
//     },
//   });
  
//   return (
//     <>
//       <Meta title={"Sign Up"} />
//       <BreadCrumb title="Sign Up" />

//       <Container class1="login-wrapper py-5 home-wrapper-4">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Sign Up</h3>
//               {formError && <div className="alert alert-danger">{formError}</div>}
//               <form
//                 action=""
//                 onSubmit={formik.handleSubmit}
//                 className="d-flex flex-column gap-15"
//               >
//                 <CustomInput
//                   type="text"
//                   name="firstName"
//                   placeholder="First Name"
//                   value={formik.values.firstName}
//                   onChange={formik.handleChange("firstName")}
//                   onBlur={formik.handleBlur("firstName")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.firstName && formik.errors.firstName}
//                 </div>
//                 <CustomInput
//                   type="text"
//                   name="lastName"
//                   placeholder="Last Name"
//                   value={formik.values.lastName}
//                   onChange={formik.handleChange("lastName")}
//                   onBlur={formik.handleBlur("lastName")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.lastName && formik.errors.lastName}
//                 </div>
//                 <CustomInput
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={formik.values.email}
//                   onChange={formik.handleChange("email")}
//                   onBlur={formik.handleBlur("email")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.email && formik.errors.email}
//                 </div>
//                 <CustomInput
//                   type="tel"
//                   name="mobile"
//                   placeholder="Mobile Number"
//                   value={formik.values.mobile}
//                   onChange={formik.handleChange("mobile")}
//                   onBlur={formik.handleBlur("mobile")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.mobile && formik.errors.mobile}
//                 </div>
//                 <CustomInput
//                   type="password"
//                   name="password"
//                   placeholder="Password"
//                   value={formik.values.password}
//                   onChange={formik.handleChange("password")}
//                   onBlur={formik.handleBlur("password")}
//                 />
//                 <div className="error-message">
//                   {formik.touched.password && formik.errors.password}
//                 </div>
//                 <div>
//                   <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
//                     <button type="submit" className="button1 border-0" disabled={isSubmitting}>
//                       {isSubmitting ? "Signing Up..." : "Sign Up"}
//                     </button>
//                     <Link to="/login" className="text-dark">Already have an account?</Link>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Signup;