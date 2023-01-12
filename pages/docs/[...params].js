import { useRouter } from "next/router"

function Docs() {
    const router = useRouter();
    const { params = [] } = router.query;
    console.log(params);

    if (params.length === 2) {
        return (
            <h1>On Page of {params[0]} and {params[1]}</h1>
        )
    }
    else if (params.length === 1) {
        return (
            <h1>On Page of {params[0]}</h1>
        )
    }
    else {
        return (
            <div>
                <h1>This is the Doc Page</h1>
            </div>
        )
    }
}
export default Docs
