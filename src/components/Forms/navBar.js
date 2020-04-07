import React from 'react';
import './Forms.css';
import { withRouter } from "react-router-dom";
class NavBar extends React.Component {
    back = () => {
        const { history } = this.props;
        history.goBack();
    }
    render() {
        return (
            <div>
            <button className='go-back-forms-components' onClick={this.back}>Back</button>
            </div>);
    }
}
export default withRouter(NavBar);
