import React from 'react'

const Mision = () => {
    return (
        <body>
            <div style={{ display: 'flex', flexDirection:"column", height: '60%' }}>
                <div style={{height:"50%",width:"100%"}}>
                    <img src='https://www.finut.org/wp-content/uploads/2019/04/Comida-diversa.jpg' width={"100%"} height={"100%"}/>
                    <img src='https://www.hotel-helicopter.com/assets/components/phpthumbof/cache/hotel-helicopter-kremenchug-suite-panoramic.1dc001607ea4e549fcba1b69b76ef98f71.jpg' width={"100%"} height={"100%"}/>
                </div>
                <div style={{display:'flex',flexWrap:"wrap", height:"50%", width:"100%"}}>
                    <div style={{width:"45%",flexDirection:"column", margin:"1%"}}>
                        <h3 style={{textAlign:"center"}}>Vision</h3>
                        <text style={{textAlign:"justify"}}>Convertirnos en una empresa con sólido prestigio hotelero a nivel local, nacional e internacional, fomentando el desarrollo empresarial y turístico en Honduras ; ofreciendo un servicio personalizado que permita una grata estadía de nuestros clientes.Siempre comprometidos a través de la mejora continua dentro de un marco de cultura, valores y hospitalidad talareña.</text>
                    </div>
                    <div style={{width:"45%",flexDirection:"column", margin:"1%"}}>
                    <h3 style={{textAlign:"center"}}>Misión</h3>
                        <text style={{textAlign:"justify"}}>Brindar un servicio hotelero de excelencia, ofreciendo a nuestros huéspedes hospitalidad, mediante un trato individualizado por un personal altamente motivado, buscando superar las expectativas de nuestros visitantes.</text>
                    </div>
                </div>
            </div>
            <footer>
        <div className='footer-container'>
            <div className='footer-content-container'>
                <h3 className='website-logo'>Hoteleria</h3>
                <span className='footer-info'>Numero de telefono: </span>
                <span className='footer-info'>22220-5897 </span>
                <span className='footer-info'>Correo Electronico: HoteleriaReact@yahoo.com</span>
            </div>
            
            <div className='footer-menus'>
                <div className='footer-content-container'>
                    <h2></h2>
                    <a href='' className='menu-item-footer'>Home</a>
                    <a href='' className='menu-item-footer'>Quienes</a>
                    <a href='' className='menu-item-footer'>Mision</a>
                </div>
                
                <div className='footer-content-container'>
                <h2></h2>
                    <a href='' className='menu-item-footer'>Gastronomia</a>
                    <a href='' className='menu-item-footer'>Habitaciones</a>
                    <a href='' className='menu-item-footer'>Eventos</a>
                </div>
                
                <div className='footer-content-container'>
                    <span className='menu-title'>Nuestras redes</span>
                    <div className='social-container'>
                        <a href='' className='social-link'></a>
                        <a href='' className='social-link'></a>
                        <a href='' className='social-link'></a>
                    </div>
                </div>
            </div>
            <div className='copyright-container'>
                <span className='copyright'>&copy; 2021, hoteleria.com </span>
                
            </div>
        </div>

    </footer>
        </body>
        
    )
}

export default Mision