import { Outlet, Navigate } from 'react-router-dom'

const PrivatePage = () => {
    const auth = {'token': false}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivatePage