import React from 'react'
import {SpinnerOverlay,
    SpinnerContainer} from './styles'

const WithSpinner = (WrappedComponent) => {
    const Spinner = ({loading, ...otherProps}) => {
        return loading ? (
            <SpinnerOverlay>
                <SpinnerContainer/>
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps}/>
        )
    }
    return Spinner;
    
}

export default WithSpinner
