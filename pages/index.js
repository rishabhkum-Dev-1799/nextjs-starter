import Link from "next/link"
import { useRouter } from "next/router"

function home() {
    const router = useRouter();

    const clickHandler = () => {
        router.push('/products')
    }
    return (
        <div>
            <h1>Welcome to Next js World</h1>
            <Link href='/blog'>
                Blog
            </Link>
            <br></br>
            <br></br>
            <Link href='/products'>
                Products
            </Link>
            <br></br>
            <br></br>
            <button onClick={clickHandler}>
                Products
            </button>
        </div>
    )
}
export default home