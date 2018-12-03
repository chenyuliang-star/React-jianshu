import styled from "styled-components";
import LogoPNG from "../../statics/logo.png"

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;

`
//注意嵌入图片的方法
export const Logo = styled.a.attrs({
    href: "./"
})`
      float: left;
      display: inline-block;
      width: 100px;
      height: 56px;
      background: url(${LogoPNG}); 
      background-size: contain;
`

export const Nav = styled.div`
      width: 960px;
      height: 100%;
      margin: 0 auto !important;
      padding-left: 15px;
      padding-right: 90px;
      box-sizing: border-box;
      a {
        text-decoration: none !important;
      }

      
`

export const NavItem = styled.div`
      line-height: 56px;
      padding: 0 15px;
      color: #333;
      cursor: pointer;
      &.left {
          float: left;
      }
      &.right {
          float: right;
          color: #969696;
      }
      &.active {
          color: #ea6f5a;
      }
`

export const NavSearch = styled.input.attrs({
     placeholder: "搜索"
})`
     width: 160px;
     height: 38px;
     outline: none;
     border-radius: 19px;
     margin-top: 9px;
     background: #eee;
     border: 1px solid #eee
     padding-left: 20px;
     padding-right: 40px;
     box-sizing: border-box;
     margin-left: 20px;
     font-size: 14px;
     color: #777;
     &::placeholder {
         color: #999;
     }
     &.focused {
         width: 240px;
     }

     &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        width: 240px;
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
     
`

export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    left: 20px;
    width: 210px;
    padding: 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    z-index: 99;
    background: white;

`

export const SearchTitle = styled.a`
    display: inline-block;
    width: 56px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchSwitch = styled.span`
    float: right;
    font-size: 14px;
    line-height: 20px;
    color: #969696;
    cursor: pointer;
    &:hover {
        color: #333;
    }
    .spin {
        display: inline-block
        font-size: 12px;
        margin-right: 5px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`
export const SearchItem = styled.a`
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 15px;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
        border: 1px solid #777;
    }

`
export const Addition = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
`

export const Button = styled.div`
    float: right;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    padding: 0px 20px;
    cursor: pointer;
    font-size: 15px;
    &.reg {
        color: #ea6f5a;
    }
    &.writing {
        background-color: #ea6f5a;
        color: white;
    }
    
`


export const NavSearchWrap = styled.div`
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        top: 11px;
        width: 35px;
        line-height: 35px;
        text-align: center;
        border-radius: 17.5px;
        cursor: pointer;
        &.focused {
            background-color: #777;
            color: #fff;
        }
    }
`