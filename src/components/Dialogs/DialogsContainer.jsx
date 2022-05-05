import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody:  (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
        sendMessage:  () => {
            dispatch(sendMessageCreator());
        }
    }
}



let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )(AuthRedirectComponent);

export default compose(
    connect( mapStateToProps, mapDispatchToProps ),
    withAuthRedirect
)(Dialogs);