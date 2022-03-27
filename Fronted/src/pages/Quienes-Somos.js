import React from 'react'
import Footer from '../Componentes/layouts/Footer'
const Quienes_Somos = () => {

    return (
        <main>
            <body>


                <div style={{ display: 'flex',flexWrap:"wrap", height: '50vh' }}>
                    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignContent:"center",width:"60%",height:"100%"}}>
                        <h2 style={{textAlign:"center"}}>¿Quien Somos?</h2>
                        <text style={{textAlign:"center", margin:"2%"}}>
                        Nuestra cadena de hoteles es una Cadena Hotelera fundada en 1992 como continuación de otra organización turística y hotelera nacida en 1975, dirigidas ambas por las mismas personas, dedicada al Turismo, la Hostelería y la Restauración.Nuestra filosofía se basa en ofrecer una excelente relación calidad-precio en los servicios, siguiendo criterios de estricta profesionalidad.
El confort y la calidad de servicio están asegurados en todos nuestros hoteles ya que desde sus inicios, la empresa, se ha comprometido con la calidad en todas sus variables, ofreciendo la mejor y más digna posible a sus clientes, preparando y cuidando al personal más eficiente y profesional, manteniendo las instalaciones al nivel que el cliente espera encontrar en un hotel e innovando permanentemente en todos los niveles posibles de la escala de servicios que se ofrecen.

Muestra de ello, es la obtención y calificación de las normas de Compromiso Calidad Turística otorgado por el Ministerio de Industria, Turismo y Comercio de España.

La empresa cuenta con un departamento de calidad, que vela por el cumplimiento de las exigentes normas de calidad establecidas para toda la cadena.
                        </text>
                    </div>
                    <div style={{display:'flex',flexDirection:"column", width:"40%",height:"100%"}}>
                        <div style={{display:"flex", width:"100%", height:"50%",alignContent:"center",justifyContent:"center"}}>
                        <img src='https://optucorp.com/blog/wp-content/uploads/2014/04/optucorp_glosario_personal_hoteles03.jpg' width={"70%"} height={"100%"}/>
                        </div>
                        <div style={{display:"flex", width:"100%", height:"50%",alignContent:"center",justifyContent:"center"}}>
                        <img src='https://x.cdrst.com/foto/hotel-sf/92a92/granderesp/grand-luxor-hotel-terra-mitica-theme-park-exterior-48c58b0.jpg' width={"70%"} height={"100%"}/>
                        </div>
                    </div>
                </div>
            </body>
            <Footer />
        </main>

    )

}

export default Quienes_Somos
