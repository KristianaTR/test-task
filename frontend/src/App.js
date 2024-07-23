import { Route, Routes } from "react-router-dom";
import ProductListPage from './Pages/ProductListPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductListPage/>}/>
        {/* <Route/> */}
      </Routes>
    </div>
  );
}

export default App;
