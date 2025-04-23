import { useState } from 'react'
import react from "react"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function ({ name, text }) {
    return (
    <div className="clientTestimonials">
    <h3 className="name">{name}</h3>      
    <p className="text">{text}</p>    
    </div>  
);
}     
