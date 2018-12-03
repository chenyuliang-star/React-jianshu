import React, { Component } from 'react';
import { RecommentsWrapper, RecommentsItem, RecommentsDownLoad }  from "../style";
import { connect } from "react-redux";


class Recomments extends Component {
    render () {
        const { list } = this.props;
        return (
             <RecommentsWrapper>
                 {
                     list.map( (data) => {
                         return (
                            <RecommentsItem  key = { data.get("id") }>
                              <img alt = "" className = "recomments-item-img" src = { data.get("imgURL") } />
                            </RecommentsItem>
                         )
                     })
                 }
                 <RecommentsDownLoad>
                     <img  alt = "" className = "download-img" src = "//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" />
                     <div className = "download-wrap">
                         <p className = "downLoad-title">下载简书手机APP ></p>
                         <span className = "downLoad-msg">随时随地发现和创作内容</span>
                     </div>
                 </RecommentsDownLoad>
             </RecommentsWrapper>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.get("home").get("recommentsList")
    }
}
export default connect(mapStateToProps, null)(Recomments);