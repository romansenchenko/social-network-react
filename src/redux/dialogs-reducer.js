const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                messages: state.newMessageBody
            };
            state.messages.push(newMessage);
            state.newMessageBody = "";
            return state;
        default:
            return state;
    }
}

export let sendMessageCreator = () => ({ type: SEND_MESSAGE })
export let updateNewMessageBodyCreator = (body) => 
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;