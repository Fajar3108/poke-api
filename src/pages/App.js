import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = lazy(() => import('./Home'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <nav>
            <Link to="/">Home</Link> 
            | <Link to="/pokemon">Pokemon</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>  
  );
}

export default App;
