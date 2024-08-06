import React from 'react'
import style from './errors.module.scss'

export default function ErrorNotification(props) {
  return (
    <div className={style.formInputNotification}>
        <p>
            {props.errorMessage}
        </p>
    </div>
  )
}
