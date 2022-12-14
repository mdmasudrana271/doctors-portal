import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from 'react-hot-toast';
import { GoogleAuthProvider } from "firebase/auth";

const Signup = () => {
    const { register, formState: {errors}, handleSubmit } = useForm();
    const {createUser, updateUser, googleLogin} = useContext(AuthContext)


    const googleProvider = new GoogleAuthProvider();

    const handleSignup = data => {
      createUser(data.email, data.password)
      .then(result => {
        const user = result.user;

        const userInfo = {
          displayName: data.name
        }

        updateUser(userInfo)
        .then(() => {})
        .catch(error=> {
          console.log(error.message)
        })

        toast.success('successfully registered user')
        console.log(user)
      })
      .catch(error => {
        console.log(error.message)
      })
    }

    const handleGoogleLogin = ()=>{
      googleLogin(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => {
        console.log(error.message)
      })
    }
  return (
    <div className="flex justify-center items-center h-[700px] w-96 mx-auto">
      <div>
        <h1 className="text-4xl text-center">Sign Up</h1>
        <form
          className="mt-6 w-96"
          onSubmit={handleSubmit(handleSignup)}
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              {...register("name", { required: "name is required" })}
              type="name"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p role="alert" className="text-error">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p role="alert" className="text-error">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              type="password"
              placeholder="******"
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-error">{errors.password?.message}</p>
            )}
          </div>
          <input className="btn btn-accent w-full mt-5" type="submit" />
          <p className="mt-3 text-center">
            New to Doctors Portal?{" "}
            <Link className="text-secondary" to="/login">
              Login
            </Link>
          </p>
        </form>
        <div className="divider">OR</div>
        <button onClick={handleGoogleLogin} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Signup;
