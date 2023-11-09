
import React from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './Createpost.css'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebase/config';



export default function Createpost() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [validationError, setValidationError] = useState('');
  const [validation, setValidation] = useState('');


  const navigate = useNavigate();


  const { data, error, optionsData } = useFetch('https://jsonplaceholder.typicode.com/posts', "POST")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title) {
      setValidationError("Title should not be empty!");
      return
    }
    if (!content) {
      setValidationError("Content should not be empty!");
      return
    }
    setValidationError('')
    console.log({ title, body: content, userId: 1 })
    optionsData({ title, body: content, userId: 1 })

  

    if (data) {
      setValidation("Post Created Successfully!");
      const timer = setTimeout(() => navigate("/"), 3000);

      return () => clearTimeout(timer);

    }
      //firebase
      const collectionRef=collection(db,"posts")
      await addDoc(collectionRef,{title, body: content, userId: 1, CreatedAt: serverTimestamp()})
      navigate('/')

  };






  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='simple'><h6>Title</h6></label>
          <input type="text" className='form-control' value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        </div>
        <div className='sim'>
          <div className='form-group'>
            <label className='simple'><h6>Content</h6></label>
            <textarea className='form-control' value={content} onChange={(e) => setContent(e.target.value)} placeholder='Write your Blog' />
          </div>
        </div>

        <div className='float-end'>
          <button type="submit" className="btn btn-outline-dark" >
            <b>Create</b>
          </button>
        </div>
        {
          validationError && <div className="alert alert-danger" role="alert">
            {validationError}
          </div>
        }

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

      </form>
    </div>

  )
}
