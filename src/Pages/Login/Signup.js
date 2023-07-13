import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/images (1).png";
import { authContext } from "../../Contexts/AuthProvider";
import { toast } from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Signup = () => {
  const { createUser, updateUser, signInWithGoogle, setLoading } = useContext(authContext);
  const { register,handleSubmit, formState: { errors }} = useForm();
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [createdUserEmail,setCreatedUserEmail]=useState('');
  const [token]=useToken(createdUserEmail);

  if(token){
    navigate(from, { replace: true });

  }
 
  const handleSignUp = (data) => {
    setSignUpError(" ");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast.success("User created Successfully ....");
        console.log(user);

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserDb(data.email, data.name);
          })

          .catch((err) => {
            console.log(err);
            setSignUpError(err.message);
          });
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  const saveUserDb = (email, name) => {
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("saveUser", data);
        setCreatedUserEmail(email);
      });
  };

  const handleGoolgeSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setLoading(false);
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };

 

  return (
    <div>
      <div className=" h-[800px]  flex -mt-20 justify-center items-center">
        <div className="w-96 p-7 border rounded-xl bg-gray-100">
          <h2 className="text-2xl text-center">Sign-Up</h2>

          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "name is required" })}
                placeholder=" Name"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                <span className="label-text">email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", { required: "Password is required" })}
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-600" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <label className="label">
              <span className="label-text">Fotget Password?</span>
            </label>

            <input className="btn btn-s w-full" type="submit" />
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </form>

          <p>
            {" "}
            <small>
              already have an account{" "}
              <Link to="/login">
                <span className="text-accent">Please Login</span>
              </Link>
            </small>{" "}
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoolgeSignIn}
            className="btn btn-outline w-full"
          >
            Continue with google
            <img className="w-10 ml-4" src={google} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
