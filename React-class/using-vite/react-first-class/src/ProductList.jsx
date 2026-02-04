function ProductList(){

    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 100
        },
        {   id: 2,
            name: 'Product 2',
            price: 200
        },
        {
            id: 3,
            name: 'Product 3',
            price: 300
        }
    ]

    return(
        <>
            <h2>Product List</h2>
            <div>
                {
                    products.map(product => <div key={product.id}>{product.name} - ${product.price}</div> )
                }
            </div>
        </>
    )
}

export default ProductList;