import React, { useState } from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Logout = () => {
    const history = useHistory()
    axios.get("http://localhost:3001/logout").then(res => {
        if (res) {
          localStorage.clear();
          history.push('/')
          window.location.reload(true);
        }else{
            alert("Something went wrong")
        }
         
  
      })
};

export default Logout;
