import { Navigate, Route, Routes } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
import { Login } from '../pages/auth/Login';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { ProtectedRoute, PublicRoute } from './ProtectedRoute';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicRoute />}><Route path="/login" element={<Login />} /></Route>
      <Route element={<ProtectedRoute />}><Route element={<AppLayout />}><Route path="/dashboard" element={<Dashboard />} /></Route></Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}
