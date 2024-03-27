// import { image } from 'fontawesome',
// import image  from './download (1).jpg'
import React from 'react'

const Button = ({content,nameof,theimage}) => {
    const mydiv = {
        first: {
            backgroundColor: 'rgb(77,77,77)',
            // backgroundColor:'blue',
            width: '250px',
            height: '300px',
            borderRadius: '10px',
            marginLeft: '10px',
            marginTop: '10px',
        },
        sec:{
            backgroundColor: 'rgb(77,77,77)',
            // backgroundColor:'red',
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            marginLeft: '10px',
            marginTop: '30px',
            color:'white',
        },
        third:{
            backgroundColor: 'rgb(77,77,77)',
            // backgroundColor:'yellow',
            width: '150px',
            height: '20px',
            borderRadius: '10px',
            marginLeft: '10px',
            marginTop: '10px',
            color:'white',
            paddingLeft:'20px'


        },
        fourth:{
            // backgroundColor: 'rgb(77,77,77)',
            // backgroundColor:'yellow',
            width: '200px',
            height: '20px',
            borderRadius: '10px',
            marginLeft: '10px',
            marginTop: '10px',
            // textAlign:'center'
            paddingLeft:'20px',
            color:'white',

        }

    }
    return (
         
            <div style={mydiv.first} >
                <div style={mydiv.sec}><img style={{height:'200px', borderRadius:'90px'}} src={theimage}/></div>
                <div style={mydiv.third}>{content}</div>
                <div style={mydiv.fourth}>{nameof}</div>
                

            </div>
       
    )
}

export default Button;