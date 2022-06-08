import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from 'redux';

/* type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = { 
    getUserProfile: (userId: number) => void 
    getStatus: (userId: number) => void 
    updateStatus: (status: string) => void 
    savePhoto: (file: File) => void 
    saveProfile?: (profile: ProfileType) => Promise<any> 
}
type PathParamsType = {
    userId: string
}

type PropsType = MapPropsType & DispatchPropsType & RouteComponentProps<PathParamsType>
 */
class ProfileContainer extends React.Component/* <PropsType> */ {

    refreshProfile() {
        let userId/* : number | null */ = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.autorizedUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    } 

    componentDidUpdate(prevProps/* : PropsType */, prevState/* : PropsType */) {
        this.refreshProfile();
    }

    render() {
        return <Profile {...this.props}
            isOwner={!this.props.router.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto} />
    }
}

let mapStateToProps = (state/* : AppStateType */) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

function withRouter(Component/* : React.Component */) {
    function ComponentWithRouterProp(props/* : any */) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose/* <React.ComponentType> */(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter//,
    //withAuthRedirect
)(ProfileContainer);