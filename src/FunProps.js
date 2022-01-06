import React, { useState } from 'react'

export const FunProps = (props) => {
  const [data, setData] = useState("Ibrar")
  const {name, email, phone} = this.props
    
  const setName = ()=>{
    setData("Ahmed")
  }
  return (
        <div>
            {data}
          <h1>{name} {email} {phone}</h1>
        </div>
    )
}
