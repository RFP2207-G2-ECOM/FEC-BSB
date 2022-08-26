import React from "react"

const PosterTag = (props) => {
  const dateOptions = {year: 'numeric', month: 'long', day: 'numeric'}
  const dateConverted = new Date(props.date.substring(0,10)).toLocaleString(undefined, dateOptions)

  return (
    <div>{`${props.username}, ${dateConverted}`}</div>
  )
}

export default PosterTag