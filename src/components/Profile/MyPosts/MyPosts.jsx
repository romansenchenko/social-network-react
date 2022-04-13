import React from "react";
import s from './MyPosts.module.css';

const MyPosts = () => {
    return <div>
        My posts
        <div>
          <textarea name="" id="" cols="30" rows="3"></textarea>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
        <div>
            <div>
                post 1
            </div>
            <div>
                post 2
            </div>
        </div>
    </div>
}

export default MyPosts;