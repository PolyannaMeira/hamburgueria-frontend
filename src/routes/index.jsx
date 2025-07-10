import { Routes, Route } from 'react-router-dom';
import { Login, Register, Home, Menu, Cart, CheckOut, CompletePayment, Orders, NewProduct, EditProduct, Products } from '../containers';
import UserLayout from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';
import { DeleteProduct } from '../containers/Admin/DeleteProduct';

export function Router() {
  return (
    <Routes>
              
      <Route path="/" element={<UserLayout />}>
       <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/completepayment" element={<CompletePayment />} />
      </Route>


      <Route path="/admin" element={<AdminLayout />}>
        <Route path="/admin/pedidos" element={<Orders />} />
        <Route path="/admin/novo-produto" element={<NewProduct />} />
        <Route path="/admin/editar-produto" element={<EditProduct />} />
        <Route path="/admin/produtos" element={<Products />} />
        <Route path="/admin/delete-produto" element={<DeleteProduct />} />
      </Route>
      
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />
    </Routes>
  )
}
