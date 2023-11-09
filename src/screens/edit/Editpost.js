import React, { useState, useEffect } from "react";
import "./Editpost.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "./../../hooks/useFetch";

export default function Editpost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validationError, setValidationError] = useState("");
  const [validation,setValidation] =useState("");
  const [modefied,setModified]=useState({})

  const navigate = useNavigate();

  const location = useLocation();

  const { state: post } = location;


  const { data, error, optionsData } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${post.id}`,
    "PATCH"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setValidationError("Title should not be empty");
      return;
    }
    if (!content) {
      setValidationError("Content should not be empty");
      return;
    }
    setValidationError("");
    optionsData(modefied)
    console.log(modefied)
 
    if (data) {
      setValidation("Post Edited Successfully!");
      const timer = setTimeout(() => navigate("/"), 3000);

      return () => clearTimeout(timer);

    }    
  };

  useEffect(() => {
    setTitle(post.title)
    setContent(post.body)
    // if (data.length !== 0) {
    //   const timer = setTimeout(() => navigate("/"), 3000);
    //   return () => clearTimeout(timer);
    // }
  }, [post.title,post.body]);


  const onTitleChange = (e) =>
  {
    setTitle(e.target.value)
    setModified({...modefied,title:e.target.value})
  }

  const onContentChange = (e) =>
  {
    setContent(e.target.value)
    setModified({...modefied,body:e.target.value})
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='simple'><h6>Title</h6></label>
          <input type="text" className='form-control' value={title} onChange={onTitleChange} placeholder="Title" />
        </div>
        <div className='sim'>
          <div className='form-group'>
            <label className='simple'><h6>Content</h6></label>
            <textarea rows="5" className='form-control' value={content} onChange={onContentChange} placeholder='Write your Blog' />
          </div>
        </div>

        <div className='float-end'>
          <button type="submit" className="btn btn-outline-dark" >
            <b>Edit</b>
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




 


//   // const onTitleChange = (e) => {
//   //   setTitle(e.target.value)
//   //   setModifiedField({...modifiedField,title:e.target.value})
//   // }

//   // const onContentChange = (e) => {
//   //   setContent(e.target.value)
//   //   setModifiedField({...modifiedField,body:e.target.value})

//   // }

//   return (
//     <div className="outercontainer">
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>
//             <h6>Title:</h6>
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             value={title}
//           />
//         </div>
//         <div className="form-group">
//           <label>
//             <h6>Content:</h6>
//           </label>
//           <textarea rows="5"
//             className="form-control"
//             value={content}
//           />
//         </div>
//         {validationError && (
//           <div className="alert alert-danger" role="alert">
//             {validationError}
//           </div>
//         )}
//         {data.length !== 0 && (
//           <div className="alert alert-success" role="alert">
//             Post Edited Successfully!
//           </div>
//         )}
//         {error && (
//           <div className="alert alert-danger" role="alert">
//             {error}
//           </div>
//         )}
//         {/* <div className="float-end">
//           <Appsubmitbutton title="Edit"/>
//         </div> */}
//       </form>
//     </div>
//   );
// }