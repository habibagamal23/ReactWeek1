import React, { Component } from 'react'
import InherntData from './InherntData'

export default class ProductData extends Component {
    state = {
        // product: {
        //     name: "samsung",
        //     price: 5000,
        //     category: "mobile"
        // },

        // we can add insted of object array for all Ditails
        ArrayProduct: [

            {
                name: "samsung",
                price: 5000,
                category: "mobile"
            }
            , {
                name: "oppo",
                price: 6000,
                category: "mobile"
            }
        ]
    }

    render() {
        return (

            <div>
                {/* <InherntData product={this.state.product} /> */}


                {/* we need to create map to send array in child  */}
                <div className="container p-3">
                    <div className="row">
                        {
                            this.state.ArrayProduct.map
                                ((detailes) => {
                                    return <InherntData array={detailes} />
                                })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
