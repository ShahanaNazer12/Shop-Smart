import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom"

function ProtuctedRoute ({children,requiredrole}){
    const { isAuthenticate,user } = useSelector((state) => state.auth);
    console.log(isAuthenticate)
    if (!isAuthenticate){
        return <Navigate to={"/loginnew"}/>
    }
    if(requiredrole && !requiredrole.includes(user?.role)){
         return <Navigate to={"/loginnew"}/>
        
    }
    return children
}

export default ProtuctedRoute