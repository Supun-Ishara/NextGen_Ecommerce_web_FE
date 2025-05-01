// import React from "react";
// import BreadCrumb from "../components/BreadCrumb";
// import Meta from "../components/Meta";
// import { Link, useNavigate } from "react-router-dom";
// import Container from "../components/Container";
// import CustomInput from "../components/CustomInput";
// import { useFormik } from "formik";
// import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../features/user/userSlice";
// const loginSchema = yup.object({
//   email: yup
//     .string()
//     .required("Email Address is Required.")
//     .email("Email Should be valid"),
//   password: yup.string().required("Password is Required."),
// });

// const Login = () => {
//   const authState = useSelector(state=>state.auth)
//   const navigate = useNavigate()
//   const dispatch = useDispatch();
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validationSchema: loginSchema,
//     onSubmit: (values) => {
//         dispatch(loginUser(values));
//             navigate("/")
//     },
//   });
//   return (
//     <>
//       <Meta title={"Login"} />
//       <BreadCrumb title="Login" />
//       <Container class1="login-wrapper py-5 home-wrapper-4">
//         <div className="row">
//           <div className="col-12">
//             <div className="auth-card">
//               <h3 className="text-center mb-3">Login</h3>
//               <form
//                 action=""
//                 onSubmit={formik.handleSubmit}
//                 className="d-flex flex-column gap-15"
//               >
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
//                   <Link to="/forgot-password">Forgot Password?</Link>
//                   <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
//                     <button className="button1 border-0" type="submit">
//                       Login
//                     </button>
//                     <Link to="/signup" className="button1 signup">
//                       SignUp
//                     </Link>
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

// export default Login;







import React, { useEffect, useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/userSlice";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const loginSchema = yup.object({
  email: yup
    .string()
    .required("Email Address is Required.")
    .email("Email Should be valid"),
  password: yup
    .string()
    .required("Password is Required.")
    .min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      setServerError("");
      dispatch(loginUser(values))
        .unwrap()
        .then(() => {
          navigate("/");
        })
        .catch((error) => {
          // Handle login error
          setServerError(error.message || "Invalid email or password");
        });
    },
  });

  useEffect(() => {
    // Reset server error when form values change
    if (formik.values.email || formik.values.password) {
      setServerError("");
    }
  }, [formik.values.email, formik.values.password]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper py-5 home-wrapper-4">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              {serverError && (
                <div className="alert alert-danger" role="alert">
                  {serverError}
                </div>
              )}
              <form
                action=""
                onSubmit={formik.handleSubmit}
                className="d-flex flex-column gap-15"
              >
                <CustomInput
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange("email")}
                  onBlur={formik.handleBlur("email")}
                />
                <div className="error-message text-danger">
                  {formik.touched.email && formik.errors.email}
                </div>
                
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
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                    <button 
                      className="button1 border-0" 
                      type="submit"
                      disabled={authState.isLoading}
                    >
                      {authState.isLoading ? "Processing..." : "Login"}
                    </button>
                    <Link to="/signup" className="button1 signup">
                      SignUp
                    </Link>
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

export default Login;