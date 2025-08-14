import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProductPage from "@/components/pages/ProductPage";
import Layout from "@/components/organisms/Layout";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-amazon">
        <Routes>
          <Route path="/" element={
            <Layout>
              <ProductPage />
            </Layout>
          } />
        </Routes>
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="z-[9999]"
          toastClassName="text-sm"
          bodyClassName="text-gray-700"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;