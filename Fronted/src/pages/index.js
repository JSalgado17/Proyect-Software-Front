import React from 'react'
import Footer from '../Componentes/layouts/Footer'
import imagenfondo from '../assetts/luxury-hotel-wallpaper-preview.jpg'



const Home = () => {

    return (
        <body>
            <div style={{ alignItems:"center", height:'10%', width:'100%' }}>
            <h2 style={{fontSize:'20', textAlign:'center', alignContent:'center', justifyContent:'center', marginTop:'2%'}}>Hoteleria</h2>
            <text style={{textAlign:'center', marginLeft:"45%"}}>RESERVA Y DISFRUTA</text>
            </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', marginTop:"-4%"}}>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor:"#e4cb86",height:"40%",width:"80%" }} >
                <img src={imagenfondo} style={{height:"60%",width:"60%", position:'absolute'}}/>
            </div>
            
            
        </div>
        </body>
    )
}

export default Home