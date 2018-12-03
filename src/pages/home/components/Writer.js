import React, { Component } from 'react';
import { WriterWrapper, WriterTitle, WriterTitleLeft, 
    WriterTitleRight, WriterItem, WriterMore } from "../style";
import { connect } from "react-redux"
import { actionCreators } from "../store";

class Writer extends Component {

    handleWriter (ico ) {
        let originAngle = ico.style.transform.replace(/[^0-9]/ig, '');
        if (originAngle) {
            originAngle = parseInt(originAngle) + 360;
        } else {
            originAngle = 360;
        }
        ico.style.transform = "rotate(" + (originAngle) + "deg)";

        this.props.reSortList();
    }
    render () {
        const { list } = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>
                    <WriterTitleLeft>
                        推荐作者
                    </WriterTitleLeft>
                    <WriterTitleRight onClick = { () => this.handleWriter(this.ico) } >
                        <i  ref = { (ico) => this.ico = ico } className = "iconfont icon">&#xe851;</i>
                        换一批  
                    </WriterTitleRight>
                    {
                        list.map( (data) => {
                            return (
                                <WriterItem key = { data.get("name") } >
                                    <img alt = "" className = "writer-img" src = {data.get("imgURL")} />
                                    <span className = "writer-info" >
                                        <a href = "#" >{ data.get("name") }</a><br />
                                        <span>{ data.get("writerInfo") }</span>
                                    </span>
                                    <a href = "#" className = "attention">+关注</a>
                                </WriterItem>
                            )
                        })
                    }
                </WriterTitle>
                <WriterMore >查看更多>></WriterMore>
            </WriterWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get("home").get("writerList")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        reSortList () {
            dispatch(actionCreators.reSortListAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Writer);