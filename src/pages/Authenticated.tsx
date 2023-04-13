import React from 'react'
import { Navigate } from 'react-router-dom'

export interface AuthenticatedPropsType {
  children: any;
}

const Authenticated: React.FC<AuthenticatedPropsType> = ({ children }) => {
  const auth = false

  if (!auth) return <Navigate to='/login' replace />

  return <React.Fragment>{children}</React.Fragment>
}

export default Authenticated
