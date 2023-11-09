import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Post.css'
import moment from "moment";

export default function Post({post}) {

    const navigate= useNavigate();

    const handleClick= () =>{
        navigate(`/post/${post.id}`,{state:post})

    
    }
  return (

        

      <div className="card" onClick={handleClick}>
          <h5 className="card-header"><b>{post.title}</b></h5>
          <div className="card-body">
              {/* <h5 className="card-title">Special title treatment</h5> */}
              <p className="card-text">{post.body}</p>
              {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}

              {post.CreatedAt && <small className="text-secondary"><i>{moment(post.CreatedAt.toDate()).calendar()}</i></small>}
          </div>
      </div>
  )
}
