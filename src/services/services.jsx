import React, { useCallback, useEffect, useState } from 'react'
import style from './services.module.css'



const Services = () => {
  const [service, setService] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(data => data.json())
      .then(result => setService(result))

  }, [])


  return (
    <>
      <h2 className={style.title}>Services</h2>
      <div className={style.container}>

        {
          service.map((el, index) => {
            console.log(el)
            return (
              index < 50 ?
                <div className={style.box}>
                  <h2>Title: {el.title}</h2>
                  <p>Description: {el.body}</p>

                </div> : ''
            )
          })
        }

      </div>
    </>
  )
}

export default Services
