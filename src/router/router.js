import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import EditPage from 'pages/EditPage/EditPage'
import MainPage from 'pages/MainPage/MainPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <MainPage/>
            },
            {
                path: '/edit',
                element: <EditPage/>
            }
        ]
    }
])

export default router