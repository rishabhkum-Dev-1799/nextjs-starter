import Link from "next/link"

function Products(productId = 100) {
    return (
        <div>
            <Link href='/'>
                <h1>Home</h1>
            </Link>
            <Link href='/products/1'>
                <h1>
                    Product 1
                </h1>
            </Link>
            <Link href='/products/2'>
                <h1>
                    Product 2
                </h1>
            </Link>
            <Link href='/products/3' replace>
                <h1>
                    Product 3
                </h1>
            </Link>

        </div>
    )
}
export default Products