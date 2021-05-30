import React from 'react'
import { ProductData } from './productData'
import './products.css'

function Products() {
    return (
        <>
            <div className="container">
                <h1><center>Products</center></h1>
                <hr />

                <div className="container">
                    <div className="row">

                        {ProductData.map((item, index) => {
                            return (
                                <div className="col col-md-3 product-col">
                                    <div class="card bg-dark product-card">
                                        <img src={item.productImage} class="card-img product-image" alt="..." />
                                        <div class="card-img-overlay">
                                            <h5 class="card-title product-name">{item.productName}</h5>
                                            <p class="card-text product-price">{item.productPrice}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <hr />
            </div>

        </>
    )
}

export default Products
