import { Route, Routes } from "react-router-dom";
import ALayout from "../../admin/components/layouts/ALayout";
import ListUsers from "../../admin/components/users/ListUsers";
import Dashboard from "../../admin/components/Dashboard";
import CreatePost from "../../admin/components/posts/CreatePost";

const AdminRouter=()=>{
    return (
            <>
                <Routes>
                    <Route element={<ALayout/>}>
                        <Route index element={<Dashboard />}/>
                        <Route path="users" element={<ListUsers />}/>
                        <Route path="create-post" element={<CreatePost />}/>
                    </Route>
                </Routes>
            </>
    )
}
export default AdminRouter;