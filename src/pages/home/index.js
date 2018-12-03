import React, { Component } from 'react';
import { HomeWrapper, HomeLeft, HomeRight  }  from "./style.js";
import { Topic, List, Recomments, Writer } from './components';
import { connect } from "react-redux"
import { actionCreators } from "./store/";

class Home extends Component { 

    componentDidMount () {
        this.props.getHomeInfo();
    }
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img  className = "banner-img" 
                    alt = ""
                    src = "//upload.jianshu.io/admin_banners/web_images/4581/8a43bf0089cd31850b7a493412ac1f39d30f1763.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recomments />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getHomeInfo () {
            const action = actionCreators.getHomeInfoAction();
            dispatch(action);
        }
    }
}
export default connect(null, mapDispatchToProps)(Home);