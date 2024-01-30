import React, { Component } from 'react'

export default class InherntData extends Component {
    render() {
        let productDetailes = this.props.array
        // can do object struct like another way 
        // let { name, price, category } = this.props.product
        return (
            <div className="col-md-3">
                <div className="product p-5 text-center shadow">

                    <h2>
                        {productDetailes.name}
                    </h2>
                    {/* <h2>
                        {price}
                    </h2> */}

                    <h2>
                        {productDetailes.price}
                    </h2>
                </div>

            </div>
        )
    }
}
