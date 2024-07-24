import React from 'react'
import { useAuth } from '../../context/Auth'
import toast from 'react-hot-toast'

const Logout = () => {

    const [authUser, setAuthUser] = useAuth()

    const handlelogout = () => {
        try {
            setAuthUser({
                ...authUser, boobookUsers: null
            })
            localStorage.removeItem("bookUsers");
            toast.success("Logout Successfull")
            window.location.reload();
        } catch (error) {
            toast.error("error", error.message)
        }
    }

    return (
        <div>
            <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handlelogout}>Logout</button>
        </div>
    )
}

export default Logout
