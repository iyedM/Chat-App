const GenderCheckbox = () => {
  return (
    <div className="flex pt-2">
        <span className="label-text text-bold pr-2 ">Male</span> 
        <input type="radio" name="radio-2" className="checkbox border-slate-900 " defaultChecked />
        <span className="label-text pl-2 pr-2 text-bold ">Female</span>
        <input type="radio" name="radio-2" className="checkbox border-slate-900" />

    </div>
  )
}
export default GenderCheckbox;


// const GenderCheckbox = () => {
//     return (
//       <div className="flex">
//           <div className="form-control">
//               <label className={"label gap-2 cursor-pointer"}>
//                   <span className="label-text">Male</span>
//                   <input type="checkbox" className="checkbox border-slate-900"/>
//               </label>
//           </div>
//           <div className="form-control">
//               <label className={"label gap-2 cursor-pointer"}>
//                   <span className="label-text">Female</span>
//                   <input type="checkbox" className="checkbox border-slate-900"/>
//               </label>
//           </div>
//       </div>
//     )
//   }
//   export default GenderCheckbox;