import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";
export default function GitHub() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/tetriv0217')
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])
    return (
        <>
        <div className="text-center m-4 h-170 bg-gray-600 text-white p-4 text-3xl flex items-center justify-center ">
            Github Followers: {data.followers}
            <img className="object-contain" src={data.avatar_url} alt="Git Picture" width={170} height={170} />
        </div>
        </>
    );
}

export const githubInfoLoader = async() =>{
    const res = await fetch('https://api.github.com/users/tetriv0217')
    return res.json()
}