import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './Postdetail.css'
import { useFetch } from '../../hooks/useFetch';

export default function Postdetail() {
  

  const location = useLocation();

  const { state: post } = location;

  const{data, error, optionsData}= useFetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`,"DELETE")

  const[validation,setValidation]=useState('');

  const navigate=useNavigate();

  const handleEdit = () =>{
      navigate(`/edit/${post.id}`,{state:post})
  }

  const handleDelete = () =>{
    optionsData();

    if (data) {
      setValidation("Post Deleted Successfully!");
      const timer = setTimeout(() => navigate("/"), 3000);

      return () => clearTimeout(timer);

    }
  }

   
  




  return (
    <div className='container outer'>
      <div className="jumbotron">
        <h1 className="display-4"><b>{post.title}</b></h1>
        <p className="lead">{post.body}</p>

        {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}

        {
          validation && <div className="alert alert-success" role="alert">
            {validation}
          </div>
        }
        {
          error && <div className="alert alert-warning" role="alert">
            {error}
          </div>
        }

        <div className='float-end'>
        <button type="submit" className="btn btn-outline-dark" onClick={handleEdit}><b>Edit</b></button>
        <button type="submit" className="btn btn-outline-dark" onClick={handleDelete}><b>Delete</b></button>
        </div>

      </div>
    </div>
  )
}
