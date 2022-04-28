import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiHide, BiShow } from "react-icons/bi";
import { Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import image1 from "../assets/chat1.webp";
import image2 from "../assets/chat2.webp";
import { useForm } from "react-hook-form";
import { signp, authtLoader } from "../store/userAuth/UserAuthActions";

const schema = Yup.object({
  name: Yup.string().required("Name is Required"),

  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Email is Required"),
  password: Yup.string()
    .min(4, "Password should be more than 4 characters")
    .required("Password is Required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must Match")
    .required("Enter Confirmed the password"),
});

const SignUpUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  console.log("user data", user);
  const [show, setShow] = useState();
  const showdata = () => {
    setShow(!show);
  };
  const defaultValues = {
    name: "",
    email: "",
    password: "",
    confirmpass: "",
  };
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (values) => {
    dispatch(signp(values));
    // console.log("values", values);
  };

  return (
    <div className=" h-screen w-screen  flex justify-center items-center">
      <div className="relative">
        <img
          src={image1}
          className="object-cover w-full flex justify-center min-h-screen min-w-screen "
        />
      </div>
      {/* =====================================Form Area========================================= */}
      <div
        className="flex justify-start rounded-md  absolute top-10 
       bg-slate-100 lg:m-0 m-4  items-center content-center"
      >
        {/* <div className="">
          <img src={image1} className="h-[34rem]  object-cover" />
        </div> */}
        <div className="w-full flex justify-end">
          <div className="">
            <div className="flex justify-center text-3xl font-bold mt-8 ml-16">
              <p className="font-Marker  font-bold text-secondary">
                SignUp User
              </p>
            </div>

            <div className=" flex justify-center">
              <form
                onSubmit={handleSubmit(submit)}
                className="form flex flex-col mt-4 lg:w-1/2 md:w-1/2 min-w-fit lg:p-6 md:p-6 p-2"
              >
                <div className="flex items-center mt-4 p-2 md:p-4 border-2  rounded-xl hover:border-secondary">
                  <AiOutlineUser className="md:text-3xl opacity-25 " />
                  <Controller
                    control={control}
                    name="name"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="ml-2 outline-none bg-slate-100  "
                        placeholder="Enter name...."
                      />
                    )}
                  />
                </div>
                <p className="text-red-800">{errors.name?.message}</p>

                <div className="flex items-center mt-4 p-2 md:p-4 border-2  rounded-xl hover:border-secondary">
                  <AiOutlineMail className="md:text-3xl opacity-25 " />
                  <Controller
                    control={control}
                    name="email"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="ml-2 outline-none bg-slate-100  "
                        placeholder="Enter Email...."
                      />
                    )}
                  />
                </div>
                <p className="text-red-800">{errors.email?.message}</p>

                <div className="flex items-center mt-4 p-2 md:p-4 border-2  rounded-xl hover:border-secondary">
                  <RiLockPasswordLine className="md:text-3xl opacity-25 " />
                  <Controller
                    control={control}
                    name="password"
                    render={({ field }) => (
                      <input
                        type={show ? "text" : "password"}
                        {...field}
                        className="ml-2 outline-none bg-slate-100  "
                        placeholder="Enter Email...."
                      />
                    )}
                  />
                  <button onClick={showdata}>
                    {show ? (
                      <BiHide className="md:text-3xl opacity-25 " />
                    ) : (
                      <BiShow className="md:text-3xl opacity-25 " />
                    )}
                  </button>
                </div>
                <p className="text-red-800">{errors.password?.message}</p>

                <div className="flex items-center mt-4 p-2 md:p-4 border-2  rounded-xl hover:border-secondary">
                  <RiLockPasswordLine className="md:text-3xl opacity-25 " />
                  <Controller
                    control={control}
                    name="confirmpassword"
                    type="password"
                    render={({ field }) => (
                      <input
                        type={show ? "text" : "password"}
                        {...field}
                        className="ml-2 outline-none bg-slate-100  "
                        placeholder="Confirm Password...."
                      />
                    )}
                  />
                  <button onClick={showdata}>
                    {show ? (
                      <BiHide className="md:text-3xl opacity-25 " />
                    ) : (
                      <BiShow className="md:text-3xl opacity-25 " />
                    )}
                  </button>
                </div>
                <p className="text-red-800">
                  {errors.confirmpassword?.message}
                </p>

                <button
                  type="submit"
                  className="border-2 bg-primaryLight 
                  text-slate-100 text-lg p-4 mt-8 rounded-xl hover:font-bold"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;
