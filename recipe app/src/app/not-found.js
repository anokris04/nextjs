import Link from "next/link";


export default function NotFound(){
    return <div>
        <h2>This page can not be found</h2>
        <Link href={'/'}>Go to Home</Link>
    </div>
}