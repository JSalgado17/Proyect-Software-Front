import React from 'react'
import Footer from '../Componentes/layouts/Footer'
import '../Componentes/css/habitacion.css'
const search = () => {
    return (
        <body>      

<h1 class='titleG'>Encuentra la habitacion perfecta para tu gusto</h1>

                <div className='grid_vision'>

                    {/* #1 */}
                    <div className='grid_vision_reunion'>
                        <div>
                            <picture>
                                <source srcSet='../Componentes/img/imagen1.png' media='max-width: 1025px' />
                                <source srcSet='../Componentes/img/imagen1.png' media='min-width: 600px' />
                                <img className='image1' src='https://images.pexels.com/photos/4917176/pexels-photo-4917176.jpeg?cs=srgb&dl=pexels-maria-orlova-4917176.jpg&fm=jpg' alt='image1' />
                            </picture>
                        </div>

                        <div>
                            <center><h3>Habitaciones con vista al bosque</h3></center>
                            <p>
                            Elegante, agradable y espacioso y tiene mucho que ofrecer, salones independientes ideales para tus eventos privados. Reuniones de negocios, conferencias, gala, cena, presentaciones, y muchos mas
                            </p>
                        </div>
                    </div>

                    <div className='grid_vision_reunion'>
                        <div>
                            <picture>
                                <source srcSet='../Componentes/img/imagen1.png' media='max-width: 1025px' />
                                <source srcSet='../Componentes/img/imagen1.png' media='min-width: 600px' />
                                <img className='image1' src='https://images.pexels.com/photos/6588575/pexels-photo-6588575.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6588575.jpg&fm=jpg' alt='image1' />
                            </picture>
                        </div>

                        <div>
                            <center><h3>Habitacion Elegante </h3></center>
                            <p>
                            Elegante, agradable y espacioso y tiene mucho que ofrecer, salones independientes ideales para tus eventos privados. Reuniones de negocios, conferencias, gala, cena, presentaciones, y muchos mas
                            </p>
                        </div>
                    </div>


                    <div className='grid_vision_reunion'>
                        <div>
                            <picture>
                                <source srcSet='../Componentes/img/imagen1.png' media='max-width: 1025px' />
                                <source srcSet='../Componentes/img/imagen1.png' media='min-width: 600px' />
                                <img className='image1' src='https://images.pexels.com/photos/6238683/pexels-photo-6238683.jpeg?cs=srgb&dl=pexels-max-vakhtbovych-6238683.jpg&fm=jpg' alt='image1' />
                            </picture>
                        </div>

                        <div>
                            <center><h3>Habitacion Clamurosa Suit</h3></center>
                            <p>
                            Elegante, agradable y espacioso y tiene mucho que ofrecer, salones independientes ideales para tus eventos privados. Reuniones de negocios, conferencias, gala, cena, presentaciones, y muchos mas
                            </p>
                        </div>
                    </div>

                    </div>
        <Footer />
        </body>
    )
}

export default search