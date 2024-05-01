
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route
} from 'react-router-dom';

import App from './App.jsx'
import Login from './pages/Login';
import CreateLink from './pages/CreateLink/index.jsx';
import AdminUi from './pages/AdminUi/index.jsx';


export default createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/links" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin">
                <Route path="" element={<h1>Dashboard</h1>}/>
                <Route path="create-link" element={<CreateLink />} />
                <Route path="ui" element={<AdminUi />} />
            </Route>
        </>
    )
);