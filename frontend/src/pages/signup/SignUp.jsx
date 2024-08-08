import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className=" text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
        <div>
            <label className="label p-2">
              <span className="text-base label-text font-bold text-gray">Full Name </span>
            </label>
            <input type="text " placeholder="Enter full name " className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text font-bold text-gray">Username </span>
            </label>
            <input type="text " placeholder="Enter Username " className="w-full input input-bordered h-10" />
          </div>
          <div>  
            <label className="label p-2">
              <span className="text-base label-text font-bold text-gray">Password </span>
            </label>
            <input type="password" placeholder="******** " className="w-full input input-bordered h-10" />  
          </div>
          <div>  
            <label className="label p-2">
              <span className="text-base label-text font-bold text-gray">Confirm Password </span>
            </label>
            <input type="password" placeholder="******** " className="w-full input input-bordered h-10" />  
          </div>
          <div>
          <span className="text-base label-text font-bold text-gray">Gender: </span>
          </div>
          <GenderCheckbox/>
          {/* GENDER CHECKBOX GOES HERE*/ }

          <a href="#" className="text-sm hover:underline hover:text-blue-950 mt-2 inline-block font-bold text-gray">
            Already have an account ?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default SignUp;


//import GenderCheckbox from "./GenderCheckbox"

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className=" text-3xl font-semibold text-center text-gray-300">
//           Sign Up <span className="text-blue-500">ChatApp</span>
//         </h1>

//         <form>
//         <div>
//             <label className="label p-2">
//               <span className="text-base label-text font-bold text-gray">Full Name </span>
//             </label>
//             <input type="text " placeholder="Enter full name " className="w-full input input-bordered h-10" />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text font-bold text-gray">Username </span>
//             </label>
//             <input type="text " placeholder="Enter Username " className="w-full input input-bordered h-10" />
//           </div>
//           <div>  
//             <label className="label p-2">
//               <span className="text-base label-text font-bold text-gray">Password </span>
//             </label>
//             <input type="password" placeholder="******** " className="w-full input input-bordered h-10" />  
//           </div>
//           <div>  
//             <label className="label p-2">
//               <span className="text-base label-text font-bold text-gray">Confirm Password </span>
//             </label>
//             <input type="password" placeholder="******** " className="w-full input input-bordered h-10" />  
//           </div>

//           <GenderCheckbox/>
//           {/* GENDER CHECKBOX GOES HERE*/ }

//           <a href="#" className="text-sm hover:underline hover:text-blue-950 mt-2 inline-block font-bold text-gray">
//             Already have an account ?
//           </a>
//           <div>
//             <button className="btn btn-block btn-sm mt-2">Sign Up</button>
//           </div>
//         </form>
//       </div>

//     </div>
//   )
// }

// export default SignUp