import { useRouter } from "next/router"

function ProductsDetails() {
    const router = useRouter();
    const productId = router.query.productId;
    return (
        <h1>
            Product Details Page as per {productId}
        </h1>
    )
}
export default ProductsDetails