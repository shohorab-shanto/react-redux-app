import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fethchPosts } from './postSlice';

const PostView = () => {
    const {isLoading,posts,error} = useSelector((state) => state.posts);
    // const user = useSelector((state) =>console.log(state));
    
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fethchPosts());
    }, [])
    
  return (
    <div>
        {isLoading && <h3>Loading ...</h3>}
        {error && <h3>{error}</h3>}
        <section>
        {posts && posts.map((post)=>{
            return(
                <article key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </article>
            );
        })}
        </section>
        
    </div>
  )
}

export default PostView;