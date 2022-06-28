import React, { useState, useEffect } from 'react';

function ProductCart(props) {

  return (
    <div className='product-card'>
      <div className="card">
        <img src={ props.product.image } alt="" />
        <div className="card-body">
          <div className="row">
            <div className="card-title">
              <h4>{ props.product.name }</h4>
              <h3>${ props.product.price }</h3>
            </div>
            <div className="view-btn">
             <a href="">Quantity: { props.product.quantity }</a>
            </div>
          </div>
          <hr />
          <p>
              { props.product.description}
          </p>
        </div>
      </div>
    </div>
  )

}


export default ProductCart;