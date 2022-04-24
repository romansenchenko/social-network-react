const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE';

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
        { id: 6, name: "Вадим" }],

    newMessageBody: ''
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 4, messages: body }]
            };
        default:
            return state;
    }
}

export let sendMessageCreator = () => ({ type: SEND_MESSAGE })
export let updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;