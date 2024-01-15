import React from 'react'
import ProductFilter from './ProductFilter'
import ProductListList from './ProductListList'

const ProductFilterAndList = () => {
  return (
    <div className='flex '>
      <ProductFilter/>
      <ProductListList/>
    </div>
  )
}

export default ProductFilterAndList
