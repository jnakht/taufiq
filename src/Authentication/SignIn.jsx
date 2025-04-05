
import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../providers/AuthProvider";


const SignIn = () => {
    const {passwordLogin, googleLogin} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        // console.log("this is the data",data);
        // console.log(data.email)

        //sign in with email and password
        passwordLogin(data.email, data.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
        
    }
    const handleGoogleLogin = () => {
        // console.log('google login works')
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                               

                                <label className="fieldset-label">Email</label>
                                <input type="email" className="input" placeholder="Email" {...register("email", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.email && <span className='text-red-600'>This field is required</span>}
                                <label className="fieldset-label">Password</label>
                                <input type="password" className="input" placeholder="Password" {...register("password", { required: true })} />
                                {/* errors will return when field validation fails  */}
                                {errors.password && <span className='text-red-600'>This field is required</span>}
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                            </fieldset>
                        </div>
                    </form>
                    <p className="text-center pb-2">Sign In With <span onClick={handleGoogleLogin} className="text-blue-600 font-bold cursor-pointer">Google</span></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;