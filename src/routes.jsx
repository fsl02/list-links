
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route
} from 'react-router-dom';

import LinksPage from './pages/LinksPage'
import Login from './pages/Login';
import CreateLink from './pages/CreateLink/index.jsx';
import AdminUi from './pages/AdminUi/index.jsx';
import { useState } from 'react';
import Dashboard from './pages/Dashboard/index.jsx';
import AdminListing from './pages/AdminListing/index.jsx';
import EditLink from './pages/EditLink/index.jsx';

export default createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/:username" element={<LinksPage />} />
            <Route path="/login" element={<Login />} />
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