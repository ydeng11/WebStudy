import React, { useState, Component } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


export default function Message() {
  const initNews = [
            {
                id: 1,
                title: 'News 1',
            },
            {
                id: 2,
                title: 'News 2',
            },
            {
                id: 3,
                title: 'News 3',
            }
        ]
  const [news, setNews] = useState(initNews)
  const navigate = useNavigate()
  
  const pushCheck = (id, title) => {
    navigate('/home/message/detail/' + id + '/' + title)
  }

  const replaceCheck = (id, title) => {
    navigate('/home/message/detail/' + id + '/' + title, { replace: true })
  }

  const goBack = () => {
    navigate(-1)
  }

  const goNext = () => {
    navigate(1)
  }

  const goBackTwo = () => {
    navigate(-2)
  }

  const goNextTwo = () => {
    navigate(2)
  }

  return (

    <div>
        {news.map((item) => {
          return (
            <div key={item.id}>
              {/* Pass props using params */}
              <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                {item.title}
              </Link>

              <button onClick={() => pushCheck(item.id, item.title)}>Push Check</button>
              <button onClick={() => replaceCheck(item.id, item.title)}>Replace Check</button>
            </div>
          )
        })}

        <hr />
        
        <button onClick={()=>goBack()}>Prev</button>
        <button onClick={()=>goNext()}>Next</button>
        <button onClick={()=>goBackTwo()}>2 step back</button>
        <button onClick={()=>goNextTwo()}>2 step forward</button>

        <hr />

        <Outlet />
      </div>
    )
}
