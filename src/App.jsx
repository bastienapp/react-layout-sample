import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AccountLayout from "./components/layouts/AccountLayout";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import MyAccount from "./components/pages/MyAccount";
import MyOrders from "./components/pages/MyOrders";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<ContactUs />} />

          <Route path='account' element={<AccountLayout />}>
            <Route index element={<MyAccount />} />
            <Route path='orders' element={<MyOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
