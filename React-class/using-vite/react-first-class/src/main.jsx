import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import Header from './Header' ;
import ConditionalRendering from './ConditionalRendering';
import ProductList from './ProductList';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <ConditionalRendering />
    <ProductList/>
  </StrictMode>,
)

//Rules of React Component
// Component Name start with uppercase letter
// must be a function or a class
// must return jsx
// Jsx must have a single parent element