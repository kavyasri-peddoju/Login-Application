import Header from '../Header'

import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        alt="products"
        className="product-image"
      />
    </div>
  </>
)

export default Products