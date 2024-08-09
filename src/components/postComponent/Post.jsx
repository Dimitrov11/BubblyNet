import React from 'react'

export default function Post(props) {
  return (
    <div>
        <h3>{props.title}</h3>
        <img src={props.image} alt="Post Image" />
        <p>{props.description}</p>
    </div>
  )
}
