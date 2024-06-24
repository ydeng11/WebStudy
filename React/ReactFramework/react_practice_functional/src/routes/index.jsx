import {Navigate} from'react-router-dom'
import Home from '../pages/home'
import About from '../pages/about'
import News from '../pages/home/news'
import Message from '../pages/home/message'
import Detail from '../pages/home/message/detail'

export default 
    [
        {
            path: '/home',
            element: <Home />,
            children: [
                {
                    path: 'news',
                    element: <News />
                },
                {
                    path: 'message',
                    element: <Message />,
                    children: [
                        {
                            path: 'detail/:id/:title',
                            element: <Detail />
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/',
            element: <Navigate to="/home"/>
        }
    ]
