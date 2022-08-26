import React, {useState} from "react"

import { MdStarOutline, MdStarHalf, MdStar } from "react-icons/md"
import styles from "../styles/Reviews/starRating.css"


const StaticRating = (props) => {
  let rating = props.rating || 0;
  let stars = [];

  while (stars.length < 5) {
    if (rating >= .8) {
      stars.push(1)
    } else if (rating > .2) {
      stars.push(.5)
    } else {
      stars.push(0)
    }
    rating = rating - 1
  }

  return (
    <div className="star-container">
      {stars.map((item, index) => {
        if (item === 0) {
          return <div className="star-icon" key={index}><MdStarOutline /></div>
        } else if (item === .5) {
          return <div className="star-icon" key={index}><MdStarHalf /></div>
        } else {
          return <div className="star-icon" key={index}><MdStar /></div>
        }
      })}
    </div>
  )


}

export default StaticRating