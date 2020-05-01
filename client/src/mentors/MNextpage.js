import React from "react";
import Product from "./MProduct";
import productList from "./MProductList";

import "./MApp.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: productList
    };
  }

  render() {
    const productItem = productList.map(product => (
      <Product key={product.id} product={product} />
    ));

    return (
      <div>
        <div className='container'>
          <h1>Students</h1>
          <div className='row '>
            <div class='card shadow' style={{ width: "750rem" }}>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='products'>{productItem}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <div className='container'>
 <div class='row'>
 <div class='col-sm-6 col-md-4 col-lg-3 mt-4'>
   <div class='card'>
    <h1>Mentors</h1>
     <div className='products'>{productItem}</div>
   </div>
  </div>
</div>
</div>  */
}

{
  // <div className='container'>
  //   <h1>Mentors</h1>
  //   <div className='row '>
  //     <div class='card shadow' style={{ width: "750rem" }}>
  //       <div className='row'>
  //         <div className='col-md-12'>
  //           <div className='products'>{productItem}</div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>;
}
