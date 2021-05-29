import { Navigate } from 'react-router-dom'
import DashboardLayout from 'src/components/DashboardLayout'
import MainLayout from 'src/components/MainLayout'
import Account from 'src/pages/Account'
import CustomerList from 'src/pages/CustomerList'
import ConverterList from 'src/pages/ConverterList'
import DeFiLab from 'src/pages/DeFiLab'
import Dashboard from 'src/pages/Dashboard'
import ProductList from 'src/pages/ProductList'
import Settings from 'src/pages/Settings'
import NotFound from 'src/pages/NotFound'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'converters', element: <ConverterList /> },
      { path: 'defi', element: <DeFiLab /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
]

export default routes
