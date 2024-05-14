
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route
} from 'react-router-dom';

import LinksPage from './pages/LinksPage'
import Login from './pages/Login';
import CreateLink from './pages/CreateLink';
import AdminUi from './pages/AdminUi';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import AdminListing from './pages/AdminListing';
import EditLink from './pages/EditLink';
import HomePage from './pages/HomePage';

export default createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} />
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