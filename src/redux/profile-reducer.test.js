import profileReducer, { actions } from "./profile-reducer";

let state = {
        posts: [
            { id: 1, message: "Моё первое сообщение!", likesCount: 111 }
        ]
    };

it('lenght of posts should be incremented', () => {
    let action = actions.addPostActionCreator("testText");
    
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(2);

  });

test('message of new post should be correct', () => {
    let action = actions.addPostActionCreator("testText");
    
    let newState = profileReducer(state, action);
    expect(newState.posts[1].message).toBe("testText");
  });

test('after deleting lenght of messages should be decrement', () => {
    let action = actions.deletePost(1); 

    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(0);
  });
  
  