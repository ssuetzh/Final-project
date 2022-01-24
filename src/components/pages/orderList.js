import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom"

class orderList extends React.Component {
    
    render() {
        
        return (
            <div className="container-xxl position-relative p-0">
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <table class="table table-striped table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">1</th>
                                    <td scope="col">Mark</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        )
    }
}


export default orderList;