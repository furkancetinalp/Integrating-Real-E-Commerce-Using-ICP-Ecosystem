import { useState } from 'react';
import { ecommerce_backend } from 'declarations/ecommerce_backend';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signin from './pages/Auth/Signin';
import Products from './pages/Products';
function App() {
  // const [greeting, setGreeting] = useState('');
  // ecommerce_backend.greet("furkan").then((item) => {
  //   console.log(item);
  // });


  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    // ecommerce_backend.greet(name).then((greeting) => {
    //   setGreeting(greeting);
    // });
    // let result;
    // ecommerce_backend.greet("furkan").then((item) => {
    //   console.log(item);
    //   result = item;
    // });
    // console.log(result);
    // console.log("greeting data", data);
    return false;
  }

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div id='content'>
          <Routes>
            {
            <Route path='/' element={<Products />} ></Route>
            /* 
            <Route path='product/:product_id' element={<ProductDetail />} ></Route>
            
            <Route path='/signup' element={<Signup />}></Route> */}
            <Route path='/signin' element={<Signin />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
