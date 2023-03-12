import { Route, Routes } from "react-router-dom";
import ALayout from "../../admin/components/layouts/ALayout";
import ListUsers from "../../admin/components/users/ListUsers";
import Dashboard from "../../admin/components/Dashboard";
import CreatePost from "../../admin/components/posts/CreatePost";
import ListPost from "../../admin/components/posts/ListPost";
import ListCategories from "../../admin/components/category/ListCategories";
import CreateCategory from "../../admin/components/category/CreateCategory";

const AdminRouter=()=>{
    return (
            <>
                <Routes>
                    <Route element={<ALayout/>}>
                        <Route index element={<Dashboard />}/>
                        <Route path="users" element={<ListUsers />}/>
                        <Route path="create-post" element={<CreatePost />}/>
                        <Route path="list-posts" element={<ListPost />}/>
                        <Route path="create-category" element={<CreateCategory />}/>
                        <Route path="list-categories" element={<ListCategories />}/>
                    </Route>
                </Routes>
            </>
    )
}
export default AdminRouter;