import React from 'react'
import { useAuth } from '../../contexts/AuthContext';

const Dashboard = () => {
  // eslint-disable-next-line 
  const { user, isAuthenticated, access } = useAuth();
  //if (!isAuthenticated) return window.location.replace("/login");
  //if (!access) return window.location.replace("/");
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard