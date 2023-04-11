import {Routes, Route} from "react-router-dom";
import Home from "../../frontend/pages/Home";
import Posts from "../../frontend/pages/Posts";
import Register from "../../frontend/components/auth/Register";
import Login from "../../frontend/components/auth/Login";
import Layout from "../../frontend/components/layouts/Layout";
import About from "../../frontend/pages/About";

const PublicRouter=()=>{
    return (
            <>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="posts" element={<Posts/>} />
                        <Route path="about" element={<About/>} />
                        <Route path="login" element={<Login/>} />
                        <Route path="register" element={<Register/>} />
                    </Route>
                </Routes>
            </>
    )
}
export default PublicRouter;