import React, { Component } from 'react';
import { ListItem, ListInfo, ListInfoMore } from "../style.js";
import { connect } from "react-redux"
import { actionCreators } from "../store";
import { Link } from "react-router-dom"

class List extends Component {
    renderListItem () {
        const { list } = this.props;
        return (
            <div>
            {
               list.map( data => {
                    return (
                        <ListItem key = { data.get("id") }>
                            <img className = "list-item-img" src = { data.get('imgURL') } alt = "" />
                            <ListInfo>
                                <Link  to={ "/detail/" + (data.get("id"))} className = "list-info-title"> { data.get("title") }</Link>
                                <p className = "list-info-msg">{ data.get("msg") }</p>
                                <div >
                                    <span className = "list-info-icon">{ data.get("author") }</span>
                                    <i className = "iconfont list-info-icon " >&#xe981;</i>
                                    <i className = "iconfont  list-info-icon" >&#xe601;</i>
                                </div>
                            </ListInfo>
                                
                        </ListItem> 
                    )
                })
                 
            }
            <ListInfoMore onClick = { this.props.handleInfo}>
                阅读更多
            </ListInfoMore>
            </div>
        );
    }
    render () {
        return (
             this.renderListItem() 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get("home").get("infoList")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInfo () {
            
            dispatch(actionCreators.getListInfoMoreAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);