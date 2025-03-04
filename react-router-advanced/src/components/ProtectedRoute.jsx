import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, element }) {
  return isAuthenticated ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;