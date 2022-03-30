import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "../components/Product";
import { getProducts } from "../services";

function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <div className="products">
      <Router>
        {!products ? (
          "Loading"
        ) : (
          <React.Fragment>
            <ul>
              {products.map(({ id, name, slug }) => (
                <li key={id}>
                  <Link to={`/products/${slug}`}>{name}</Link>
                </li>
              ))}
            </ul>
            <Switch>
              <Route path="/products/:slug">
                <Product products={products} />
              </Route>
            </Switch>
          </React.Fragment>
        )}
      </Router>
    </div>
  );
}

export default Products;
