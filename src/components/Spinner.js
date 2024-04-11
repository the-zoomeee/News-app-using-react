import loading from '../assets/loading.gif'

import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="loading" />
        </div>
    )
  }
}

export default Spinner

