import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineMail } from "react-icons/ai";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import image1 from "../assets/recipe2.jpeg";
import image2 from "../assets/fruit-and-veggie-with-greens.jpg";
import { login, authtLoader } from "../store/userAuth/UserAuthActions";

const defaultValues = {
  email: "",
  password: "",
};

const LoginUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  //   const action = () => {
  //     navigate("/UserList");
  //   };
  const [show, setShow] = useState(false);

  const handleshow = () => {
    setShow(!show);
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Valid email Required")
        .required("Email is Required"),
      password: Yup.string()
        .min(4, "Password should be more than 4 characters")
        .required("Password is Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        dispatch(login(values));
        resetForm(defaultValues);
      }, 3000);

      resetForm(defaultValues);
    },
  });
  return (
    <div className="bg-black h-screen  flex justify-center items-center">
      <div className="relative">
        <img
          src={image2}
          className="object-cover w-full min-h-screen  opacity-25"
        />
      </div>
      <div
        className="flex justify-center rounded-md  absolute top-20 
       bg-slate-100 lg:m-0 m-4  items-center content-center"
      >
        <div className=" items-center">
          <img src={image1} className="h-[29rem]  object-cover" />
        </div>
        <div className="w-full">
          <div className="">
            <div className="flex justify-center text-3xl font-bold mt-8">
              <p className="font-Marker flex  font-bold text-secondary">
                <span className="text-4xl ">
                  <FaUser />
                </span>
                Login User
              </p>
            </div>

            <div className=" flex justify-center">
              <form
                onSubmit={formik.handleSubmit}
                className="form flex flex-col mt-4 w-fit lg:p-6 md:p-6 p-2"
              >
                <div className="flex items-center p-2 md:p-4 border-2  rounded-xl hover:border-secondary">
                  <AiOutlineMail className="md:text-3xl opacity-25 " />
                  <input
                    className="ml-2 outline-none bg-slate-100  "
                    placeholder="Enter Email..."
                    type="text"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                {formik.touched.email && formik.errors.email ? (
                  <p className="text-red-700">{formik.errors.email}</p>
                ) : null}

                <div className="flex items-center p-2 md:p-4 border-2 mt-8   rounded-xl hover:border-secondary">
                  <RiLockPasswordLine className="md:text-3xl opacity-25 " />
                  <input
                    className="ml-2 outline-none bg-slate-100 "
                    placeholder="Enter Password..."
                    type={show ? "text" : "password"}
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                  <button onClick={handleshow}>
                    {show ? (
                      <BiHide className="md:text-3xl opacity-25 " />
                    ) : (
                      <BiShow className="md:text-3xl opacity-25 " />
                    )}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <p className="text-red-700">{formik.errors.password}</p>
                ) : null}
                <Link
                  to="/Reset"
                  className="underline text-secondary flex justify-end hover:font-semibold"
                >
                  Forgotten Password?
                </Link>

                <button
                  type="submit"
                  className="border-2 bg-primaryLight text-slate-100 text-lg p-4 mt-8 rounded-xl hover:font-bold"
                >
                  Login in
                </button>
                <div className="flex justify-center flex-col items-center">
                  <p>---or---</p>

                  <Link
                    to="/SignUp"
                    className="underline text-secondary hover:font-semibold"
                  >
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
