const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                //{ id: 1, message: "Вау", likesCount: 111 },
                { id: 1, message: "Моё первое сообщение!", likesCount: 111 }
                //{ id: 2, message: "Мое 2 сообщение.", likesCount: 11 },
                //{ id: 3, message: "%-)", likesCount: 1 }
            ],
            newPostText: 'exampleText'
        },

        dialogsPage: {
            messages: [
                { id: 1, messages: "П ривет!" },
                { id: 2, messages: "Как дела?" },
                { id: 3, messages: "Что делаешь?" }
            ],

            dialogs: [
                { id: 1, name: "Д има" },
                { id: 2, name: "Света" },
                { id: 3, name: "Саша" },
                { id: 4, name: "Оля" },
                { id: 5, name: "Андрей" },
                { id: 6, name: "Вадим" }],
                newMessageText: 'exampleTextMessage'
        }
    },
    _callSubscriber() {
        console.log("state was changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);


        } else if (action.type === SEND_MESSAGE) {
            let newMessage = {
                id: 4,
                messages: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE ) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export let addPostActionCreator = () => ({ type: ADD_POST });

export let updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export let sendMessageActionCreator = () => ({ type: SEND_MESSAGE })

export let updateNewMessageTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_MESSAGE, newText: text })

export default store;
window.store = store;