import React, {useState} from "react"
import { MdStarOutline, MdStarHalf, MdStar } from "react-icons/md"


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
    <div>
      {stars.map(item => {
        if (item === 0) {
          return <div><MdStarOutline /></div>
        } else if (item === .5) {
          return <div><MdStarHalf /></div>
        } else {
          return <div><MdStar /></div>
        }
      })}
    </div>
  )


}

export default StaticRating