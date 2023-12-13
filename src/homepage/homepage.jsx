import React, { useCallback, useEffect, useState } from 'react'

import style from './home.module.css'


const Home = () => {


  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(next => next.json())
      .then(result => setData(result))
  }, [])


  return (
    <>
      <h1>Home Page</h1>

      <div className={style.titleContainer}>

        {data?.map((el, index) => (index < 50 ? <h2 key={index}>{el.id}. Title: {el.title}</h2> : '')

        )}
      </div>
    </>
  )
}

export default Home
