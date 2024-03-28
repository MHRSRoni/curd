import CreateProduct from './components/CreateProduct';
import Navabar from './components/Navbar';
import { ProductTable } from './components/ProductTable';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateProduct from './components/UpdateProdcut';

function App() {
   return (
      <>
         <BrowserRouter>
         <div className="bg-[#eee] font-[Inter] text-white">
            <Navabar />
         </div>
            <Routes>
              <Route path='/' element={<ProductTable />} />

              <Route path='/add' element={<CreateProduct />} />
              <Route path='/update/:productId' element={<UpdateProduct />} />

            </Routes>

         </BrowserRouter>
      </>
   );
}

export default App;
