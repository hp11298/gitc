/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';


export default class App extends Component {
  render() {
    console.log(this);
    const e = 5;
    const cl=`${e === 5 ? 'hey' : 'ke'}`;
    return (

      <div>
         hey
      </div>
    );
  }
}
