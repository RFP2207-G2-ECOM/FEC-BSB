import React, { useEffect } from "react"

const PosterTag = (props) => {
  const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
  const dateConverted = new Date(props.date.substring(0,10)).toLocaleString(undefined, dateOptions)

  if (props.username !== 'Seller') {
    return (
      <div>{`${props.username}, ${dateConverted}`}</div>
    )
  } else {
    return (
      <div><b>{props.username}</b>{`, ${dateConverted}`}</div>
    )
  }
}

export default PosterTag