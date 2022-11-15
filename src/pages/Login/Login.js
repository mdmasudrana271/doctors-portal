import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, formState: {errors}, handleSubmit } = useForm();
  

  const handleLogin = data => {
    console.log(data)
  }

  return (
    <div className="flex justify-center items-center h-[700px] w-96 mx-auto">
      <div>
        <h1 className="text-4xl text-center">Login</h1>
        <form className="mt-6 w-96" onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
            {...register("email", {required: 'email is required'})}
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            {errors.email && <p role="alert" className="text-error">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
            {...register('password', {required: 'password is required', minLength: {value: 6, message: 'password must be at least 6 characters long'}})}
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <label className="label">
              <span className="label-text">Forgot Password ?</span>
            </label>
            {errors.password && <p className="text-error">{errors.password?.message}</p>}
          </div>
          <input className="btn btn-accent w-full mt-5" type="submit" />
          <p className="mt-3 text-center">New to Doctors Portal? <Link className="text-secondary" to='/signup'>Create new account</Link></p>
        </form>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
