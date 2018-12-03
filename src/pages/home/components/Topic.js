import React, { Component } from 'react';
import { TopicWrapper, TopicItem, TopicMoreItem } from "../style";
import { connect } from "react-redux";

class Topic extends Component {
    renderItem () {
        const { list } = this.props;
        return (
            list.map( (msg) => {
                return (
                    <TopicItem key = { msg.get("id") }  >
                      <img src = { msg.get("imgURL") } className = "inner-img"  alt = ""/>
                      { msg.get("msg") }
                    </TopicItem>
                )
            })
        )
    }
    render () {
        return (
            <TopicWrapper> 
                { this.renderItem() }
                <TopicMoreItem >更多热门话题>></TopicMoreItem>
            </TopicWrapper>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.get("home").get("topicList")
    }
}
export default connect(mapStateToProps, null)(Topic);