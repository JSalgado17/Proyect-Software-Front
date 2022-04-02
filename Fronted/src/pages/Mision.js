import React from 'react'
import mision from '../assetts/mision.jpg'
import Footer from '../Componentes/layouts/Footer'

const Mision = () => {
    return (
        <body>
            <div style={{ display: 'flex', flexDirection:"column", height: '60%' }}>
                <div style={{height:"50%",width:"100%"}}>
                    <img src={mision} style={{height:"125%",width:"100%"}}/>
                </div>
                <div style={{display:'flex',flexWrap:"wrap", height:"50%", width:"100%", marginLeft:"3%"}}>
                    <div style={{width:"45%",flexDirection:"column", margin:"1%", backgroundColor: 'rgba(52, 52, 52, 0.8)', borderRadius: 10}}>
                        <h3 style={{textAlign:"center", marginTop:"1%", color:"white"}}>Visión</h3>
                        <div style={{margin:"2%"}} >
                        <text style={{textAlign:"justify", color:"white"}}>
                        Convertirnos en una empresa con sólido prestigio hotelero a nivel local, nacional e internacional, fomentando el desarrollo empresarial y turístico en Honduras ; ofreciendo un servicio personalizado que permita una grata estadía de nuestros clientes. Siempre comprometidos a través de la mejora continua dentro de un marco de cultura, valores y hospitalidad talareña.
                        </text>
                        </div>
                    </div>
                    <div style={{width:"45%",flexDirection:"column", margin:"1%", backgroundColor:'rgba(52, 52, 52, 0.8)', borderRadius: 10}}>
                    <h3 style={{textAlign:"center",marginTop:"1%",color:"white"}}>Misión</h3>
                        <div style={{margin:"2%"}} >
                        <text style={{textAlign:"justify",color:"white"}}>
                        Brindar un servicio hotelero de excelencia, ofreciendo a nuestros huéspedes hospitalidad, mediante un trato individualizado por un personal altamente motivado, buscando superar las expectativas de nuestros visitantes.
                        </text>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </body>
        
    )
}

export default Mision