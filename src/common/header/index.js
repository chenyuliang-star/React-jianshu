import React  from "react";
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper,
     Logo, Nav, NavItem, NavSearch, Addition, Button, NavSearchWrap,
     SearchInfo, SearchTitle, SearchSwitch, SearchItem
} from "./style.js";
import { connect } from "react-redux";
import { actionCreators } from "./reducer/index";
import { Link} from "react-router-dom";


class Header extends React.Component{
    
    showSearchInfo = () => {
        const { focused, mouseIn, curPage, totalPage, list } = this.props;
        const jsList = list.toJS();
        let newList = [];
        for ( let i = (curPage - 1) * 10; i < (curPage) * 10; i++ ) {
            if (jsList[i] !== undefined ) newList.push(jsList[i]);
        }
        if ( !jsList.length) return null;
        if (focused || mouseIn) return (
            <SearchInfo 
                onMouseEnter = { this.props.handleMouseEnter }
                onMouseLeave = { this.props.handleMouseLeave }
            >
                <SearchTitle >热门搜索</SearchTitle>
                <SearchSwitch 
                onClick = { () => {this.props.handlePage(curPage, totalPage, this.iconfont)} }>
                <i ref = { (icon) => { this.iconfont = icon; }} className = "iconfont spin">&#xe851;</i>
                换一批
                </SearchSwitch>
                <div>
                    { 
                        newList.map( (msg) => {
                            return (<SearchItem key = { msg } > {msg} </SearchItem>)
                        })
                    }
                </div>
            </SearchInfo>);
         else return null;
    }

    render () {
        const { focused, list } = this.props;
        return (
            <HeaderWrapper >
                <Logo />
                <Nav>
                    <NavItem className =  'left active'  >首页</NavItem>
                    <NavItem className = 'left' >下载App</NavItem>
                    <NavItem className = 'right'  >  <Link to = "/login">登录</Link> </NavItem>
                    
                    <NavItem className = 'right'  >
                        <i className = "iconfont">&#xe636;</i>
                    </NavItem>
                    <NavSearchWrap>
                        <CSSTransition
                        　 in = {  focused }
                            timeout = {200}
                            classNames = "slide"
                        >   
                            <NavSearch  
                                className = {  focused ? "focused" : "" } 
                                onFocus = { () => {this.props.handleInputFocus(list)} }
                                onBlur = {  this.props.handleInputBlur }
                            />
                        </CSSTransition>
                        <i className =  {  focused ? "focused iconfont zoom" : "iconfont zoom" } >&#xe60c;</i>
                        {
                            this.showSearchInfo()
                        }
                    </NavSearchWrap>
                    <Addition>
                        <Button className = "writing">
                            <i className = "iconfont">&#xe616;</i>&nbsp;
                            写文章
                        </Button>
                        <Button className = "reg"><Link to = "/login">注册</Link> </Button>
                    </Addition>
                </ Nav>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.get("header").get("focused"),
        list: state.get("header").get("list"),
        mouseIn: state.get("header").get("mouseIn"),
        curPage: state.get("header").get("curPage"),
        totalPage: state.get("header").get("totalPage")
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus (list) {
            list.size === 0 && dispatch(actionCreators.getSearchInfo());
            dispatch(actionCreators.inputFocus());
        },
        handleInputBlur () {
            dispatch(actionCreators.inputBlur());
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave());
        },
        handlePage (curPage, totalPage, iconfont) {
            let originAngle = iconfont.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            iconfont.style.transform = 'rotate(' + ( originAngle + 360 ) + 'deg)';
            if ( curPage === totalPage) {
                dispatch(actionCreators.changePage( 1));
            } else {
                dispatch(actionCreators.changePage( curPage + 1));
            }
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);