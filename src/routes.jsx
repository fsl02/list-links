
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route
} from 'react-router-dom';

import LinksPage from './pages/LinksPage'
import Login from './pages/Login';
import CreateLink from './pages/CreateLink';
import AdminUi from './pages/AdminUi';
import Dashboard from './pages/Dashboard';
import AdminListing from './pages/AdminListing';
import EditLink from './pages/EditLink';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import App from './App';
import { FormValidation } from './context/FormValidationContext';

export default createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
            <Route path="/teste" element={<App />} />
            <Route path="/:username" element={<LinksPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={
                <FormValidation>
                    <Register />
                </FormValidation>
            } />
            <Route path="/admin">
                <Route path="" element={<Dashboard />}></Route>
                <Route path="create-link" element={<CreateLink />}></Route>
                <Route path="edit-link/:id" element={<EditLink />}></Route>
                <Route path="listing" element={<AdminListing />}></Route>
                <Route path="ui" element={<AdminUi />}></Route>
            </Route>
        </>
    )
);