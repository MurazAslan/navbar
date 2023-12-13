import React, { useEffect, useState } from 'react'
import style from './products.module.css'

const Products = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then(next => next.json()
        .then(result => result))
      .then(result => setData(result.carts[0].products)
      )

  }, [])
  return (
    <>
      <h1>Products</h1>

      <div className={style.products}>

        {
          data.map((el, index) => {
            return <div className={style.box} key={index}>
              <h2>Title: {el.title}</h2>
              <p>Price: {el.price}</p>
              <img src={el.thumbnail} alt="" />

            </div>


          })
        }


      </div>
    </>
  )
}

export default Products
