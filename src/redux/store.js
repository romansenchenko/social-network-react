import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

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

            newMessageBody: ''
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
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;