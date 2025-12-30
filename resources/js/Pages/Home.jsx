import Navbar from "../Components/Navbar";
import { usePage } from '@inertiajs/react';

export default function Home(){
    const { auth } = usePage().props;

    console.log(auth.user);
    return(
        <>
        <Navbar></Navbar>
        <h1 className=" bg-amber-300">Hello There</h1>
        inpu
        </>
    )
}
