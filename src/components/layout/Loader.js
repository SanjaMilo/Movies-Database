import React from 'react'
import loader from '../../../src/images/loader.gif';

const Loader = () => {
  return (
    <div className="Loader">
      <img
        src={loader}
        alt="Loading..."
      />
    </div>
  )
}

export default Loader;