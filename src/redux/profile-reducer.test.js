import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
        posts: [
            { id: 1, message: "Моё первое сообщение!", likesCount: 111 }
        ]
    };

test('lenght of posts should be incremented', () => {
    let action = addPostActionCreator("testText");
    
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);

  });

test('message of new post should be correct', () => {
    let action = addPostActionCreator("testText");
    
    let newState = profileReducer(state, action);
    expect(newState.posts[1].message).toBe("testText");
  });

test('after deleting lenght of messages should be decrement', () => {
    let action = deletePost(1); 

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(0);
  });
  
  