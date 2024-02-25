import { json } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";

interface User {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
}

interface LoaderParams {
    userId: string;
}

export async function loader({ params }: { params: LoaderParams }) {
    const { userId } = params;
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + userId 
    );
    const json = (await response.json()) as User;

    return { user: json };  //return ettiğim şey bir objedir. o da; json
}

type LoaderData = Awaited<ReturnType<typeof loader>>;  //soldan, loader fonksiyonunun typenı al, sonra döndüğü kısmı al, promise olduğu için "awaited" bekle

const UserPage = () => {
const { user } = useLoaderData() as LoaderData;
const { userId } = useParams() as unknown as LoaderParams;


    return (
        <>
        <h1>Users</h1>
      <p>UserID: {userId}</p>
      <pre>{JSON.stringify(user)}</pre>
        </>
    )
}

export default UserPage