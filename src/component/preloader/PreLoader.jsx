import React from "react";
import { FidgetSpinner } from 'react-loader-spinner';

//for spinner portfolio laod hone se phle
  const PreLoader= ()=>{
        
    return (
        <FidgetSpinner
            visible={true}
            height="300"
            width="300"
            ariaLabel="fidget spinner-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['var(--title-color)', 'var(--title-color)', 'var(--title-color)']}
            backgroundColor="var(--title-color-dark)"
        />
    )
  }

  export default PreLoader;

