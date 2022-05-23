import { Routes, Route } from "react-router-dom";
import './App.css';

import Form from './components/From'
import Header from './components/Header/Header';
import Home from './components/Home';

export default function App() {
  return (
    <div>
      <Header />

      <main id="root">
     
      <Routes>
      <Route index element={<Home />} />
      <Route path="/form" element={<Form />} />
      </Routes>
      </main>
        </div>
  );
}


