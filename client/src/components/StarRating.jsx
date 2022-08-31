import React from 'react';

// input rating should be a number between 0-5
const StaticRating = (props) => {
  let ratings = props.rating;
  ratings = ratings/5 * 100;
  ratings = `${ratings}%`
  let style = {width: ratings};

  return (
    <div className="StarRatings">
      <div className="FillRatings" style={style}>
        <span>★★★★★</span>
      </div>
      <span>★★★★★</span>
    </div>
  )
};

export default StaticRating;


// This is the CSS for the Star Components, in case you need to change the size for your component

// .StarRatings {
//   color: #ccc;
//   font-size: 300%;
//   position: relative;
//   margin: 0;
//   padding: 0;
// }

// .FillRatings {
//   color: #e7711b;
//   padding: 0;
//   position: absolute;
//   display: block;
//   top: 0;
//   left: 0;
//   overflow: hidden;
// }