import { Route, Routes } from "react-router-dom";
import ProductListPage from './Pages/ProductListPage';
import ProductAddPage from './Pages/ProductAddPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductListPage/>}/>
        <Route path='/add-product' element={<ProductAddPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
