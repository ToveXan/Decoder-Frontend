import React from 'react';
import '../css/Title.css';
import SvgLogin from './SvgLogin'
import SvgSignup from './SvgSignup'
import DoubleCryptography from './DoubleCryptography'
//import '../fonts.css';

class Title extends React.Component{
  render(){
  return (
      <div className="title-full">
        <div className="title">
        <DoubleCryptography height={650} />
        </div>
        <div className="all-links">
          <div className="skew-div">
            <div>
            <a className="a-login" href="/login">  
              <SvgLogin height={200} className="login" />
            </a>
            </div>
            <p />
            <div>
            <a className="a-signup" href="/signup">  
              <SvgSignup height={200} className="signup" />
            </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Title;
