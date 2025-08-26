import React from "react";

function Navbar({setCategory}){
    return(
       <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsPage</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-1" style={{ width: "100%", justifyContent: "center", display: "flex" }}>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("technology")}><span className="">Technology</span></a>
        </li>
        <li className="nav-item"> 
          <a className="nav-link" onClick={()=>setCategory("business")}>Business</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("sports")}>Sports</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("health")}>Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar;