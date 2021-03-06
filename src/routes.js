import { Navigate } from 'react-router-dom'
import DashboardLayout from 'src/components/DashboardLayout'
import MainLayout from 'src/components/MainLayout'
import Account from 'src/pages/Account'
import CustomerList from 'src/pages/CustomerList'
import ConverterList from 'src/pages/ConverterList'
import DeFiLab from 'src/pages/DeFiLab'
import Dashboard from 'src/pages/Dashboard'
import ProductList from 'src/pages/ProductList'
import Pomodoro from 'src/pages/Pomodoro'
import Countdown from 'src/pages/Countdown'
import CountdownPage from 'src/pages/CountdownPage'
import Settings from 'src/pages/Settings'
import DeFiPortfolio from 'src/pages/DeFiPortfolio'
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
      { path: 'pomodoro', element: <Pomodoro /> },
      { path: 'countdown', element: <Countdown /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'settings', element: <Settings /> },
      { path: 'portfolio', element: <DeFiPortfolio /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '404', element: <NotFound /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: 'countdownPage', element: <CountdownPage /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
]

export default routes
