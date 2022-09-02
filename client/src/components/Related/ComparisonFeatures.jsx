import React from 'react';

const ComparisonFeatures = ({feature}) =>  {

  if (feature.current === null) {
    return (
      <>
        <tr>
          <th><i class="fa fa-check"></i></th>
          <th>{feature.feature}</th>
          <th>{feature.related}</th>
        </tr>
      </>
    );
  } else if (feature.related === null) {
    return (
      <>
        <tr>
          <th>{feature.current}</th>
          <th>{feature.feature}</th>
          <th><i class="fa fa-check"></i></th>
        </tr>
      </>
    );
  } else {
    return (
      <>
        <tr>
          <th>{feature.current}</th>
          <th>{feature.feature}</th>
          <th>{feature.related}</th>
        </tr>
      </>
    );
  }
}

export default ComparisonFeatures;