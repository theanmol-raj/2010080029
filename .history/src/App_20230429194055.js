import { Route ,Routes } from "react-router-dom";
function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" element={user ? <HomeScreen /> : <LoginScreen login={Signin} />} />
          <Route path="/product/:slug" element={<ProductScreen user={user} />} />
          <Route path="/product/cart" element={<Procced user={user} />} />
          <Route path="/admin/add-product" element={<ProductAdder />} />

     </Routes>
    </div>
  );
}

export default App;
