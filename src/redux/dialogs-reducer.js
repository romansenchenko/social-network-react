const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
        { id: 6, name: "Вадим" }]
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 4, messages: body }]
            };
        default:
            return state;
    }
}

export let sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;