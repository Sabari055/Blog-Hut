import React from 'react'
import './Home.css'
import Post from '../../components/post/Post';
import { useFetchCollection } from '../../hooks/useFetchCollection';
// import { useFetch } from '../../hooks/useFetch';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../firebase/config';



export default function Home() {

  // const [posts,setPosts] = useState(null)
    
    // useEffect(() => {
    //   const collectionRef= collection(db,"posts")

    //   getDocs(collectionRef)
    //   .then((snapshot) =>{
    //     let results = []

    //     snapshot.docs.forEach((doc) =>{
    //       results.push({...doc.data(),id:doc.id})
    //     })
    //     setPosts(results)
    //   })

    //   .catch((err) => console.log(err))

      
    // },[])

const {documents: posts} = useFetchCollection("posts")
  
  return (
    <div className='container-sm'>{

      posts && posts.map((post) => {
        return <Post post={post} key={post.id} />
      })
    }
    </div>
  )

}
