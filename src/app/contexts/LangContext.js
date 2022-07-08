// LangContext.js
import React, {createContext} from 'react'

export const English = {
    home: 'Home',
    cart: 'Cart',
    products: 'Products',
    login: 'Login'
}

export const Tamil = {
    home: 'வீடு',
    cart: 'வண்டி',
    products: 'தயாரிப்புகள்',
    login: 'உள்நுழைய'
}

export const Hindi = {
    home: 'घर',
    cart: 'कार्ट',
    products: 'उत्पाद',
    login: ' लॉग इन'
}

// English is used as default value
const LangContext = createContext(  English )

export default LangContext