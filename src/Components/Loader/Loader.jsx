import React from 'react'
import style from './Loader.module.css'

export default function Loader() {
  return <>
  <div className={style.body}>
 <div className={style.loader}>
      <div className={style.waves}></div>
      <div className={style.hook}></div>
    </div>
    </div>
    </>
  
}
