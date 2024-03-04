import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertBox = ({alertMessage, variant}) => {
  return (
    <Alert
    variant={variant}
    dismissible
  >
   {alertMessage}
  </Alert>
  )
}

export default AlertBox