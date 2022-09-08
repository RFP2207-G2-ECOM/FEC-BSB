import React, { useRef, useState } from 'react';

const ZoomToMouse = ({ image, setUltraZoom }) => {
  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const containerRef = useRef(null);

  const [ opacity, setOpacity ] = useState(0);
  const [ xCoord, setXCoord ] = useState(0);
  const [ YCoord, setYCoord ] = useState(0);

  const handleMouseEnter = () => {
    setOpacity(1);
  };
  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
    let element = e.target.getBoundingClientRect();
    let x = e.clientX - element.left;
    let y = e.clientY - element.top;
    setXCoord(-x * 1.5);
    setYCoord(-y * 1.5);
  }

  let styling = {
    'opacity': opacity,
    'backgroundImage': `url(${image})`,
    'backgroundRepeat': `no-repeat`,
    'backgroundPosition': `${xCoord}px ${YCoord}px`
  };

  return (
    <div className='UltraZoomInImage' onClick={()=>{setUltraZoom(false)}}
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img className='ZoomedImage'ref={sourceRef} src={image} ></img>
      <div id='OverlayZoomedImage' ref={targetRef} style={styling} ></div>
    </div>
  )

}

export default ZoomToMouse;

{/* <div key={0} className='UltraZoomInImage' onClick={()=>{setUltraZoom(false)}} >
<img className='ZoomedImage' src={listOfPics[curPic]} ></img>
</div>  */}