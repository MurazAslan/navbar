import React, { useEffect, useState } from 'react'
import style from './contact.module.css'

const Contact = () => {
  const [contact, setContact] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(next => next.json())
      .then(data => setContact(data))

  }, [])

  return (
    <>
      <h2 className={style.title}>User Contacts</h2>

      <div>

        {
          contact.map((el, index) => {
            return (
              <div key={index} className={style.box}>
                <h2>Name: {el.name}</h2>
                <p>E-mail: {el.email}</p>
                <p>Street: {el.address.street}</p>

              </div>
            )

          })
        }


      </div>
    </>
  )
}

export default Contact
