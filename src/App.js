import Home from './components/Home';
import Product from './components/Product';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Product/abc">Product</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
