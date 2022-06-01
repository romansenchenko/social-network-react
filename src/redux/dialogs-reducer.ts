import { NumberLiteralType } from "typescript";

const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    messages: string
}

let initialState = {
    dialogs: [
        { id: 1, name: "Д има" },
        { id: 2, name: "Света" },
        { id: 3, name: "Саша" },
        { id: 4, name: "Оля" },
        { id: 5, name: "Андрей" },
        { id: 6, name: "Вадим" }
    ] as Array<DialogType>,
    messages: [
        { id: 1, messages: "П ривет!" },
        { id: 2, messages: "Как дела?" },
        { id: 3, messages: "Что делаешь?" }
    ] as Array<MessageType>
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): InitialStateType => {
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

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessageBody: string
}

export let sendMessageCreator = (newMessageBody: string): sendMessageCreatorActionType => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;