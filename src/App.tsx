
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '@/contexts/AuthContext';
import { Navbar } from '@/components/layout/Navbar';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import { Login } from '@/pages/Login';
import { Dashboard } from '@/pages/Dashboard';
import { PumpReadings } from '@/pages/PumpReadings';
import { ChemicalInventory } from '@/pages/ChemicalInventory';
import { Reports } from '@/pages/Reports';

const AppRoutes = () => {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/login" element={user ? <Navigate to="/" replace /> : <Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/pump-readings"
        element={
          <ProtectedRoute allowedRoles={['operator', 'supervisor', 'manager', 'admin']}>
            <PumpReadings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/chemical-inventory"
        element={
          <ProtectedRoute allowedRoles={['operator', 'supervisor', 'manager', 'admin']}>
            <ChemicalInventory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="min-h-screen bg-background">
          <Navbar />
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;