import { Route, Routes } from "react-router-dom";
import ULayout from "../../user/components/layouts/ULayout";
import Dashboard from "../../user/components/Dashboard";

const UserRouter=()=>{
    return (
            <>
                <Routes>
                    <Route element={<ULayout/>}>
                        <Route index element={<Dashboard/>}/>
                    </Route>
                </Routes>
            </>
    )
}
export default UserRouter;