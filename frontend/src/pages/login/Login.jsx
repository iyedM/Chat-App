import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className=" w-full p-6  bg-gray-600 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100">        
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login         <span className="text-blue-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text font-semibold text-black">Username </span>
            </label>
            <input type="text " placeholder="Enter Username " className="w-full input input-bordered h-10" />
          </div>
          <div>  
            <label className="label p-2">
              <span className="text-base label-text font-semibold text-black">Password </span>
            </label>
            <input type="password" placeholder="******** " className="w-full input input-bordered h-10" />  
          </div>
          <Link to="/signup" className="text-sm hover:underline hover:text-blue-950 mt-2 inline-block font-semibold text-black">
            {"Don't"} have an account ?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
        </div>
    </div>
)
}

export default Login

///STARTER CODE FOR THIS FILE 
/* const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className="h-full w-full bg-gray-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-20 border border-gray-100">        
        <h1 className="text-3xl font-semibold text-center text-gray-300">Login <br></br>
        <span className="text-blue-500"> Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text font-semibold text-black">Username </span>
            </label>
            <input type="text " placeholder="Enter Username " className="w-full input input-bordered h-10" />
          </div>
          <div>  
            <label className="label p-2">
              <span className="text-base label-text font-semibold text-black">Password </span>
            </label>
            <input type="password" placeholder="******** " className="w-full input input-bordered h-10" />  
          </div>
          <a href="#" className="text-sm hover:underline hover:text-blue-950 mt-2 inline-block font-semibold text-black">
            {"Don't"} have an account ?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Login</button>
          </div>
        </form>
        </div>
    </div>
)
}

export default Login */