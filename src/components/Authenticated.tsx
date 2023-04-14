import React from 'react'
import { Navigate } from 'react-router-dom'
import DB from '../lib/DatabaseStorage'

export interface AuthenticatedPropsType {
  children: any;
}

const Authenticated: React.FC<AuthenticatedPropsType> = ({ children }) => {
  const auth = DB.isSessionActive()

  if (!auth) return <Navigate to='/login' replace />

  return <React.Fragment>{children}</React.Fragment>
}

export default Authenticated
