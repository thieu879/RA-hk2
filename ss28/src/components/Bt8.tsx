import React, { Component } from 'react';

interface ListProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default class Bt8 extends Component<ListProduct> {
    constructor(props: ListProduct) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1, name: "bàn", price: 200, quantity: 1
                },
                {
                    id: 2, name: "ghế", price: 300, quantity: 1
                },
            ]
        };
    }

    render() {
        return (
            <div>
                Bt8:
                <ol>
                    {this.state.products.map(product => (
                        <li key={product.id}>
                            <div>ID: {product.id}</div>
                            <div>Name: {product.name}</div>
                            <div>Price: {product.price}</div>
                            <div>Quantity: {product.quantity}</div>
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
}
