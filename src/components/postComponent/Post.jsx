import React from 'react'
import style from "./Post.module.scss"

export default function Post(props) {
  return (
    <div className={style.postWrapper}>
        <h3>{props.title}</h3>
        <img src={props.image} alt="Post Image" />
        <p>{props.description}</p>
    </div>
  )
}
