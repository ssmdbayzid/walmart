import React from 'react'
import AuthProvider from './AuthProvider'
import ProductProvider from './ProductsProvider'

const Providers = ({children}) => {
  return (
    <AuthProvider>
      <ProductProvider>
        {children}
        </ProductProvider>
    </AuthProvider>
  )
}

export default Providers