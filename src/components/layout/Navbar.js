import React from "react";
import { Link, NavLink } from "react-router-dom";
// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <div className="container">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/about">
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/contact">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         <Link className="btn btn-outline-light" to="/login">Login</Link>
//         <Link className="btn btn-outline-light" to="/register">Register</Link>
//         <Link className="btn btn-outline-light" to="/logout">Logout</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
const loggedIn = localStorage.getItem('loggedIn');

class Navbar extends React.Component {


  render() {
    return (

      //   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      //    <div className="container">
      //      <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarSupportedContent"
      //       aria-controls="navbarSupportedContent"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon"></span>
      //     </button>

      //     <div className="collapse navbar-collapse">
      //       <ul className="navbar-nav mr-auto">
      //         <li className="nav-item">
      //           <NavLink className="nav-link" exact to="/">
      //             Home
      //           </NavLink>
      //         </li>
      //         <li className="nav-item">
      //           <NavLink className="nav-link" exact to="/about">
      //             About
      //           </NavLink>
      //         </li>
      //         <li className="nav-item">
      //           <NavLink className="nav-link" exact to="/contact">
      //             Contact
      //           </NavLink>
      //         </li>
      //       </ul>
      //     </div>



      //   </div>
      //   {(function(){
      //         if (!loggedIn) {
      //             return <span> <Link className="btn btn-outline-light" to="/login">Login</Link>
      //             <Link className="btn btn-outline-light" to="/register">Register</Link></span>
      //         } else   {
      //             return <span><Link className="btn btn-outline-light" to="/logout">Logout</Link></span>
      //         }
      //     }).call(this)}


      // </nav>
      //   <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      //   <div className="container">
      //         <a className="navbar-brand" href="index.html"><span className="flaticon-pizza-1 mr-1"></span>Pizza<small>Delicous</small></a>
      //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
      //           <span className="oi oi-menu"></span> Menu
      //         </button>
      //     <div className="collapse navbar-collapse" id="ftco-nav">
      //       <ul className="navbar-nav ml-auto">
      //         <li className="nav-item active">
      //           <NavLink className="nav-link" exact to="/">
      //                Home
      //           </NavLink>
      //         </li>
      //         <li className="nav-item active">
      //           <NavLink className="nav-link" exact to="/contact">
      //                Contact
      //           </NavLink>
      //         </li>
      //         <li className="nav-item active">
      //           <NavLink className="nav-link" exact to="/about">
      //                 About
      //           </NavLink>
      //         </li>


      //          {(function(){
      //           if (!loggedIn) {
      //               // return <span> <Link className="btn btn-outline-light" to="/login">Login</Link>
      //               // <Link className="btn btn-outline-light" to="/register">Register</Link></span>

      //               return <span><Link className="btn btn-outline-light" to="/login">Login</Link><Link className="btn btn-outline-light" to="/register">Register</Link></span>
      //           } else   { 
      //             return <span><Link className="btn btn-outline-light" to="/logout">Logout</Link></span>
      //           }
      //       }).call(this)}
      //             </ul>
      //     </div>
      //     </div>
      // </nav>

      <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
          <a href className="navbar-brand p-0">
            <h1 className="text-primary m-0"><i className="fa fa-utensils me-3" />Restoran</h1>
            {/* <img src="img/logo.png" alt="Logo"> */}
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0 pe-4">
              <NavLink className="nav-item nav-link active" exact to="/">
                Home
              </NavLink>
              {(function(){
                if (loggedIn) {
                  
                  return (<span><Link className="nav-item nav-link active" to="/dashboard">Dashboard</Link></span>)
                }
            }).call(this)}
              <NavLink className="nav-item nav-link active" exact to="/contact">
                Contact Us
              </NavLink>
              <NavLink className="nav-item nav-link active" exact to="/about">
                About Us
              </NavLink>
              {(function(){
                if (!loggedIn) {
                    // return <span> <Link className="nav-item nav-link" to="/login">Login</Link><span>
                    return <span><Link className="nav-item nav-link " to="/login">Login</Link></span>
                } else   { 
                  
                  return (<span><Link className="nav-item nav-link" to="/logout">Logout</Link></span>)
                }
            }).call(this)}
              
              
             
             
            </div>
          </div>
        </nav>
      </div>


    )
  }
}


export default Navbar;