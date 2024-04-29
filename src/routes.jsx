
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route
} from 'react-router-dom';


export default createBrowserRouter(
    createRoutesFromElements(
      <Route path="/login" element={(<h1>TESTE</h1>)} />
    )
);