import React from 'react'
import Footer from '../Componentes/layouts/Footer'
import quienessomos1 from '../assetts/quienessomos1.jpg'
import quienessomos2 from '../assetts/quienessomos2.jpg'
import quienessomos3 from '../assetts/quienessomos3.jpg'
import quienessomos4 from '../assetts/quienessomos4.jpg'
const Quienes_Somos = () => {

    return (

        <div className='Cuerpo'>
            <div style={{ display: 'flex', flexWrap: "wrap" }}>
                <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignContent: "center", width: "60%", height: "100%", marginLeft: "7%", marginTop: "2%" }}>
                    <h2 style={{ textAlign: "center" }}>¿Quien Somos?</h2>
                    <text style={{ textAlign: "center", margin: "2%", backgroundColor: 'rgba(49, 49, 49, 0.4)', borderRadius: 10, fontSize: "105%" }}>
                        Nuestra cadena de hoteles es una Cadena Hotelera fundada en 1992 como continuación de otra organización turística y hotelera nacida en 1975, dirigidas ambas por las mismas personas, dedicada al Turismo, la Hostelería y la Restauración.Nuestra filosofía se basa en ofrecer una excelente relación calidad-precio en los servicios, siguiendo criterios de estricta profesionalidad.
                        El confort y la calidad de servicio están asegurados en todos nuestros hoteles ya que desde sus inicios, la empresa, se ha comprometido con la calidad en todas sus variables, ofreciendo la mejor y más digna posible a sus clientes, preparando y cuidando al personal más eficiente y profesional, manteniendo las instalaciones al nivel que el cliente espera encontrar en un hotel e innovando permanentemente en todos los niveles posibles de la escala de servicios que se ofrecen.

                        Muestra de ello, es la obtención y calificación de las normas de Compromiso Calidad Turística otorgado por el Ministerio de Industria, Turismo y Comercio de España.

                        La empresa cuenta con un departamento de calidad, que vela por el cumplimiento de las exigentes normas de calidad establecidas para toda la cadena.
                    </text>
                </div>
                <div style={{ display: 'flex', flexDirection: "column", width: "20%", height: "130%", alignItems: "center" }}>
                    <div style={{ display: "flex", width: "100%", height: "300%", alignContent: "center", justifyContent: "center", }}>
                        <div class='slider-frame'>
                            <ul>
                                <li><img src={quienessomos1} /></li>
                                <li><img src={quienessomos2} /></li>
                                <li><img src={quienessomos3} /></li>
                                <li><img src={quienessomos4} /></li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ display: "flex", width: "100%", height: "50%", alignContent: "center", justifyContent: "center" }}>
                    </div>
                </div>
            

            <Footer />
        </div>
        </div>


    )

}

export default Quienes_Somos
