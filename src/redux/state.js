import { rerenderEntireTree } from "./../render";

let state = {

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
    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText ="";
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;