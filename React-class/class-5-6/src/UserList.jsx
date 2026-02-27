import { useFetchUserList } from "./CustomHookForFetching"
import Modal from "./Modal";
import { useState } from "react";

export default function UserList() {
    const { userList, loading, setRetryStatus } = useFetchUserList();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if(loading){
        return <p>Loading... <button onClick={()=>setRetryStatus((value)=>!value)}>Retry</button></p>
    }
    else{
        return (
        <article className="card">
            <h3>User List</h3>
            <button onClick={()=>setIsModalOpen(true)}>Open Modal</button>
            <ul>
                {userList.map((user) => (
                    <li key={user.id}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
            <Modal open={isModalOpen} onClose={()=>setIsModalOpen(false)}>
                <h2>Modal Content</h2>
                <p>This is a modal. Click outside to close.</p>
            </Modal>
        </article>
        )
    }
    }

