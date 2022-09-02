import React from "react"
import { IoTriangleSharp } from "react-icons/io5"

const ProductBreakdownCharacteristic = ( { characteristic, characteristicsObj } ) => {

  const descriptors = {
    Size: ["Too small", "Perfect", "Too big"],
    Width: ["Too Narrow", "Perfect", "Too wide"],
    Comfort: ["Uncomfortable", "Perfect"],
    Quality: ["Poor", "Perfect"],
    Length: ["Runs short", "Perfect", "Runs Long"],
    Fit: ["Runs tight", "Perfect", "Runs long"]
  }

  let descriptorOne = descriptors[characteristic][0]
  let descriptorTwo = descriptors[characteristic][1]
  let descriptorThree = descriptors[characteristic][2]
  let styleBlockOne
  let styleBlockTwo
  let styleBlockThree

  if(descriptors[characteristic].length === 2) {
    descriptorOne = descriptors[characteristic][0]
    descriptorTwo = ""
    descriptorThree = descriptors[characteristic][1]
    styleBlockOne={minWidth: '24%'}
    styleBlockTwo={minWidth: '50%'}
    styleBlockThree={minWidth: '24%'}
  }

  let scale = ( characteristicsObj[characteristic].value / 5 ) * 100
  let pointerStyle = {left: `${scale}%`}

  console.log(`this is the scale for ${characteristic}:`, scale)

  return (
    <div className='product-breakdown-characteristic'>
      <div className='product-breakdown-characteristic-name'>{characteristic}</div>
      <div className='product-breakdown-scale'>
        <div className='product-breakdown-pointer' style={pointerStyle}><IoTriangleSharp /></div>
        <div className='product-breakdown-scale-blocks'>
          <div id='scale-block-1' style={styleBlockOne}></div>
          <div id='scale-block-2' style={styleBlockTwo}></div>
          <div id='scale-block-3' style={styleBlockThree}></div>
        </div>
      </div>
      <div className='product-breakdown-footer'>
        <div className='product-breakdown-descriptor'>{descriptorOne}</div>
        <div className='product-breakdown-descriptor'>{descriptorTwo}</div>
        <div className='product-breakdown-descriptor'>{descriptorThree}</div>
      </div>
    </div>
  )

}

export default ProductBreakdownCharacteristic