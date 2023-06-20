import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/images (1).png"
import { authContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
const Login = () => {

  const {signIn,signInWithGoogle,setLoading}=useContext(authContext)
  const location = useLocation();
  const { register, handleSubmit,formState:{errors} } = useForm();
  const[loginError,setLoginError]=useState('');
  const from = location.state?.from?.pathname || '/';

const navigate = useNavigate();


const handleLogin = data => {
  console.log(data);
  setLoginError('');

   signIn(data.email,data.password)
   .then(result=>{
    const user=result.user;
    console.log(user);
    // const currentUser={email:user.email};

    navigate(from,{replace:true})

   })
   .catch(err=>{
    console.error(err.message);
    setLoginError(err.message)

  })

}

const handleGoolgeSignIn=()=>{
  signInWithGoogle()
  .then(result=>{
    const user=result.user;
    setLoading(false)
    console.log(user);
    navigate(from,{replace:true})

  })
  .catch(err=>{
    console.error(err);
    toast.error(err.message)
  })
}

  return (
    <div className=" h-[800px]  flex -mt-20 justify-center items-center">
      <div className="w-96 p-7 border rounded-xl bg-gray-100">
        <h2 className="text-2xl text-center">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              {...register("email",{required:"Email is required"})}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"/>
           {errors.email && <p className="text-red-600" role="alert">{errors.email?.message}</p>}

          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password",{required:"Password is required"})}
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"/>
             {errors.password && <p className="text-red-600" role="alert">{errors.password?.message}</p>}

          </div>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <label className="label">
              <span className="label-text">Fotget Password?</span>
            </label>

            <input className="btn btn-s w-full" type="submit" />

        </form>
        <p> <small>New to BestBuy   <Link to="/Signup"><span className="text-accent">
        Create an account
        </span></Link></small> </p>
        <div className="divider">OR</div>
        <button onClick={handleGoolgeSignIn} className="btn btn-outline w-full">Continue with google
        <img className="w-10 ml-4" src={google} alt="" />

        </button>

      </div>
    </div>
  );
};

export default Login;
