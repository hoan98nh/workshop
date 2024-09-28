import { Navigate, Route, Routes, useRoutes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/(website)/home/page';
import LayoutWebsite from './pages/(website)/layout';
import SignUpPage from './pages/(auth)/signup/page';
import LayoutAdmin from './pages/(admin)/layout';
import DashboardPage from './pages/(admin)/dashboard/page';
import NotFoundPage from './pages/(website)/404/page';
import ShopPage from './pages/(website)/product/page';
import CartPage from './pages/(website)/cart/page';
import CheckOut from './pages/(website)/checkOut/page';
import ContactPage from './pages/(website)/contact/page';
import AboutPage from './pages/(website)/about/page';
import DetailPage from './pages/(website)/product/detail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite />}>
          <Route index element={<HomePage />} />
          <Route path='signup' element={<SignUpPage />} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='product/detail' element={<DetailPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='checkout' element={<CheckOut />} />
          <Route path='contact' element={<ContactPage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path='dashboard' element={<DashboardPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
