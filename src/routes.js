import Account from 'src/pages/Account'
import ConverterList from 'src/pages/ConverterList'
import Countdown from 'src/pages/Countdown'
import CountdownPage from 'src/pages/CountdownPage'
import CustomerList from 'src/pages/CustomerList'
import Dashboard from 'src/pages/Dashboard'
import DashboardLayout from 'src/components/DashboardLayout'
import DeFiPortfolio from 'src/pages/DeFiPortfolio'
import EvmTools from 'src/pages/EvmTools'
import MainLayout from 'src/components/MainLayout'
import { Navigate } from 'react-router-dom'
import NotFound from 'src/pages/NotFound'
import Pomodoro from 'src/pages/Pomodoro'
import ProductList from 'src/pages/ProductList'
import ProjectList from 'src/pages/ProjectList'
import Settings from 'src/pages/Settings'

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'account', element: <Account /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'converters', element: <ConverterList /> },
      { path: 'projects', element: <ProjectList /> },
      { path: 'evmTools', element: <EvmTools /> },
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
