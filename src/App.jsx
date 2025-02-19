import React from "react";
import image from "./assets/OIP.jpeg"
let intruduction = "Sou um programador Web Junior - full stack - que já programa a no minimo 6 meses. Eu continuo estudando e acho que já estou num nivel avançado mas em continuo aprendizado na area. "


const coisa = () => { 
  return (
    <>
      <div className="main">
        <div className="coisa">
          <h2 className="">Sou um programador - Web developer full stack!</h2>
          <p>{intruduction}</p>
          <div className="botoes">
            <a className="botao1" href="#">Github</a>
            <a className="botao2" href="#">Ver projetos</a>
          </div>
        </div>
        <div className="coisa2">
          <img  className="" src={image} alt="imagem que eu gosto" />
        </div>
      </div>
    </>
  )
}

export default coisa