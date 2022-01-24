import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Link, NavLink } from "react-router-dom";


const Dashboard = () => {
  const history = useHistory()
const loggedIn = localStorage.getItem('loggedIn');
console.log(loggedIn)
if (!loggedIn) {
    history.push('/login')
}
  const ID = localStorage.getItem('id');
  const [order, setOrder] = useState({
    item: "",
    id:ID
  })
  const handleChange = e => {
    const { name, value } = e.target
    setOrder({
      ...order,
      [name]: value
    })
  }

  
  const Order = () => {
    const { id,item } = order
    console.log(order)
    axios.post("http://localhost:3001/order", order).then(res => {
      if (res.data) {
        alert("Order Placed")
        // history.push('/')

      } else {
        alert("No User Found")
      }

    })
    
    

  }
  
  


  return (
    <div className="container-xxl position-relative p-0">
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
        </div>
      </div>
    

      <div>
        
        
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
              
            </div>
            <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                    <i className="fa fa-coffee fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Popular</small>
                      <h6 className="mt-n1 mb-0">Breakfast</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                    <i className="fa fa-hamburger fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Special</small>
                      <h6 className="mt-n1 mb-0">Launch</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                    <i className="fa fa-utensils fa-2x text-primary" />
                    <div className="ps-3">
                      <small className="text-body">Lovely</small>
                      <h6 className="mt-n1 mb-0">Dinner</h6>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-4.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-5.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-6.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-7.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="d-flex align-items-center">
                        <img className="flex-shrink-0 img-fluid rounded" src="img/menu-8.jpg" alt="" style={{width: '80px'}} />
                        <div className="w-100 d-flex flex-column text-start ps-4">
                          <h5 className="d-flex justify-content-between border-bottom pb-2">
                            <span>Chicken Burger</span>
                            <span className="text-primary">$115</span>
                          </h5>
                          <small className="fst-italic"></small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <div className="container-xxl py-5 bg-dark hero-header mb-5">
       <section className="h-100">
        <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
            <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
              <div className="text-center my-5">
                
              </div>
              <div className="card shadow-lg">
                <div className="card-body p-5">
                  <h1 className="fs-4 card-title fw-bold mb-4">Place An order</h1>
                  <form method="POST" className="needs-validation" noValidate autoComplete="off">
                    <div className="mb-3">
                      <input type="text" className="form-control" name="item" value={order.item} placeholder="Item Name" onChange={ handleChange } />
                      <div className="invalid-feedback">
                        data is invalid
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <div  className="btn btn-primary ms-auto" onClick={Order} >order</div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>





    </div>
    
  );
};

export default Dashboard;
