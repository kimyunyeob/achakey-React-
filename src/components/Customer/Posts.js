import React from 'react';
import parse from 'html-react-parser';

const Posts = ({ posts, loading, pages }) => {
    if(loading) {
        return <h2>loading...</h2>;
    }
    if(pages){
        pages = (pages-1)*10;
        
    }else{
        pages = 0;
    }
    return (
        <>
            {posts.map((post,index) => (
                <li key={post.id}>
                    <div className="question">
                        <a href="#" onClick={e => e.preventDefault()}>
                            <span className="num">{index+pages+1}</span>
                            {post.title}
                        </a>
                    </div>
                    <div className="answer">
                        {parse(`${post.contents}`)}
                    </div>
                </li>
            ))}
        </>
    )
}
export default Posts;