const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, message: "Моё первое сообщение!", likesCount: 111 }
    ],
    newPostText: 'exampleText'
}

const profileReducer = (state = initialState, action) => { 
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;;

        default:
            return state;;
    }
}

export let addPostActionCreator = () => ({ type: ADD_POST });
export let updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;