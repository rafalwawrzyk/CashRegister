import React from 'react'
import {Button} from './styles'

const CustomButton = ({children,...otherProps}) => {
  return (
    <Button {...otherProps}>
      {children}
    </Button>
  )
}

export default CustomButton
