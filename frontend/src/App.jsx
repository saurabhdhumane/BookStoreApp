import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Courses from "./components/Courses/Courses"
import SignUp from "./components/SignUp/SignUp"


function App() {

  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </div>

    </>
  )
}

export default App
