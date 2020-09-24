
import React from 'react';
import '../css/CaseFileOne.css';

export default function LoadCoffee(props) {
  return(
    <div className="coffee-div">
      {(() => {
        switch (props.timer) {
          case 0:
            return <p><i className="flaticon-coffee-cup" /><i className="flaticon-coffee-cup" /><i className="flaticon-coffee-cup" /></p>
          case 1:
            return <p><i className="flaticon-coffee-cup" /><i className="flaticon-coffee-cup" /><i className="flaticon-coffee" /></p>
          case 2:
            return <p><i className="flaticon-coffee-cup" /><i className="flaticon-coffee" /><i className="flaticon-coffee" /></p>
          case 3:
            return <p><i className="flaticon-coffee" /><i className="flaticon-coffee" /><i className="flaticon-coffee" /></p>
          default:
            console.log("oops");
          }
      })()}
    </div>
    )
}




