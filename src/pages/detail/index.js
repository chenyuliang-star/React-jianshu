import React, { Component } from 'react';
import { DetailWrapper, DetailTitle, DetailContent } from "./style";
import { connect } from "react-redux";
import { actionCreators  } from "./store";

class Detail extends Component {
    render () {
        const { title, content } = this.props;
        return (
            <DetailWrapper>
                <DetailTitle>
                { title }
                </DetailTitle>
                <DetailContent dangerouslySetInnerHTML = { {__html: this.props.content }}>
                
                </DetailContent>
            </DetailWrapper>
        );
    }

    componentDidMount () {
        this.props.getDetail();
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.get("detail").get("title"),
        content: state.get("detail").get("content")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetail () {
            dispatch(actionCreators.getDetailAciton())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)