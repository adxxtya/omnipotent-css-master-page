import React from 'react'

function index() {
    return (
<div style={{display: "flex", minHeight: "100vh", justifyContent: "center", alignItems: "center"}}>
  <div style={{perspective: "900px"}}>
    <div style={{transform: "rotateX(60deg) scale(0.7)", boxShadow: "0px 20px 100px #555", transition: "0.5s ease all", backgroundColor: "#332212", width: "250px", height: "250px", display: "inline-flex", justifyContent: "center", alignItems: "center", fontStyle: "italic", textTransform: "lowercase", fontSize: "1.2rem", color: "white"}} 
      onMouseEnter={(e) => {e.currentTarget.style.transform = "rotate(0deg) scale(1) translateY(10px)"; e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "black"; e.currentTarget.style.cursor = "pointer";}}
      onMouseLeave={(e) => {e.currentTarget.style.transform = "rotateX(60deg) scale(0.7)"; e.currentTarget.style.backgroundColor = "#332212"; e.currentTarget.style.color = "white"; e.currentTarget.style.cursor = "default";}}>
      CSS is Awesome
    </div>
  </div>
</div>
  )
}

export default index