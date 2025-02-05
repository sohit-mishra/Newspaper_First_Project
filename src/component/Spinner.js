import React, { Component } from 'react'
import spinner from '../spinner.svg'

const Spinner = () => {
    return (
      <div className='text-center'>
        <img src={spinner} alt="spinner" />
      </div>
    )
}

export default Spinner;