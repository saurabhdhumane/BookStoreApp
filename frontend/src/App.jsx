import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Courses from "./components/Courses/Courses"
import SignUp from "./components/SignUp/SignUp"
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/Auth";



function App() {

  const [authUser, SetAuthUser] = useAuth()
  console.log(authUser);

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={authUser ? <Courses /> : <Navigate to={"/signup"} />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Toaster />
      </div>

    </>
  )
}

export default App
