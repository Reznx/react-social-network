import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { getUserProfile } from "./../../redux/profile_reducer";
import { withAuthRedirect } from "./../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 8;
    }
    this.props.getUserProfile(userId);
  }
  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

export default compose(
  connect(
    mapStateToProps,
    { getUserProfile }
  ),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
