import React, { useState } from 'react'

const ProductInfo = ({product}) => {

    const [count, setcount] = useState(1)

    const minusOne = () => {
        const minus = count -1 
        if (minus >= 1) {
            setcount(minus)
        }
    }

    const plusOne = () => setcount(count + 1)


  return (
    <article className='product-info'>
        <h2 className='product-info__title'>{product?.title}</h2>
        <p className='produc-info__description'>{product?.description}</p>
        <div className='card-product__price-container'>
          <h3 className='card-product__price-label product-info__label'>Price</h3>
          <p className='card-product__price-number product-info__number'>$ {product?.price}</p>
        </div>
        <div className='product-info__quantity-container'>
            <div onClick={minusOne} className='product-info__minus'>-</div>
            <div>{count}</div>
            <div onClick={plusOne} className='product-info__plus'>+</div>
        </div>
        <button>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
    </article>
  )
}

export default ProductInfo