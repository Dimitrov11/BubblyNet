import React from 'react'
import style from "./Post.module.scss"
import { Link } from 'react-router-dom'

export default function Post(props) {
  return (
    <div className={style.postWrapper}>
        <h3>{props.title}</h3>
        <img src={props.image} alt="Post Image" />
        <Link to={`/post/${props.postId}`}>Details</Link>
    </div>
  )
}
