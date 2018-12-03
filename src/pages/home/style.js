import styled from "styled-components";

export const HomeWrapper = styled.div`
      width: 960px;
      overflow: hidden;
      margin: 0 auto;
`
export const HomeLeft = styled.div`
      width: 625px;
      margin-left: 15px;
      padding-top: 30px;
      float: left;
      .banner-img {
          width: 625px;
          height: 270px;
      }
`
export const HomeRight = styled.div`
      width: 280px;
      float: right; 
`
export const TopicWrapper = styled.div`
      padding: 20px 0 10px 0;
      margin-left: -18px;
      overflow: hidden;
     
`
export const TopicItem = styled.div`
      height: 28px;
      line-height: 28px;
      float: left;
      padding-right: 10px;
      margin-left: 18px;
      margin-bottom: 12px;
      font-size: 14px;
      border: 1px solid #dcdcdc;
      broder-radius: 4px;
      background: #f7f7f7;
      cursor: pointer;
      color: #777;
      .inner-img {
            width: 32px;
            height: 28px;
            float: left;
            margin-right: 10px;
            display: block;
      }
`
export const TopicMoreItem = styled.div`
      height: 28px;
      line-height: 28px;
      float: left;
      margin-left: 20px;
      font-size: 12px;
      cursor: pointer;
      color: #777;
      opacity: 0.8;
`

export const ListItem =styled.div`
      width: 625px;
      overflow: hidden;
      padding: 15px 2px 20px 0;
      border-bottom: 1px solid #f0f0f0;
      position: relative;
      .list-item-img {
           display: block;
           
           width: 150px;
           height: 100px;
           position: absolute;
           top: 30px;
           right: 0px;
      }
`

export const ListInfo =styled.div`
      
      .list-info-title {
            display: block;
            width: 458px;
            font-size: 18px;
            line-height: 1.5;
            font-weight: 700;
            color: #969696
            cursor: pointer
            margin-bottom: 8px;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
      }
      .list-info-msg {
            width: 458px;
            margin: 0 0 8px;
            font-size: 13px;
            line-height: 24px;
            color: #999;
            
      }
      .list-info-icon {
            font-size:12px;
            color: #999;
            margin-right: 15px;
            line-height: 15px;
            cursor: pointer;
      }
      
`
export const ListInfoMore = styled.div`
      width:100%;
      height: 40px;
      margin: 30px auto 60px;
      padding: 10px 15px;
      text-align: center; 
      font-size: 15px;
      color: #fff;
      border-radius: 20px;
      background-color: #a5a5a5;
      box-sizing: border-box;
      cursor: pointer;
`
export const RecommentsWrapper = styled.div`
      width: 280px;
      padding-top: 30px;
`
export const RecommentsItem = styled.div`
      cursor: pointer;
      margin-bottom: 4px;
      border-radius: 4px;
     
      .recomments-item-img {
            width: 280px;
            height: 50px;
            background-size: contain;
      }
`

export const RecommentsDownLoad = styled.a`
      display: block;
      width: 234px;
      height: 60px;
      padding: 10px 22px;
      display: flex;
      .download-img {
            width: 60px;
            height: 60px;
      }
      .download-wrap {
            display: flex;
            flex-flow: wrap;
            padding-top: 10px;
            padding-left: 10px;
            width: 150px;   
      }
      
      .downLoad-title {
            display: inline-block;
            font-size: 15px;
            color: #333;
      }
      .downLoad-msg {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
      }
`

export const WriterWrapper = styled.div`
      width: 280px;
      height: 295px;
      margin-top: 30px;

`
export const WriterTitle = styled.div`
      width: 280px;
      overflow: hidden;
`
export const WriterTitleLeft = styled.span`
      font-size: 14px;
      color: #969696;
      float: left;
`
export const WriterTitleRight = styled.span`
      font-size: 14px;
      color: #969696;
      float: right;
      cursor: pointer;
      transition: all .2s ease-in;
     
      .icon {
         display: inline-block;
         font-size: 12px;
         margin-right: 5px;
         transition: all .2s ease-in;
         display: inline-block;
         transform-origin: center center;
      }
`
export const WriterItem = styled.div`
      width: 280px;
      overflow: hidden;
      padding-top: 15px;
      position: relative;
      .writer-img {
            width: 48px;
            width: 48px;
            border: 1px solid #ddd;
            border-radius: 50%;
            float: left;
      }
      .writer-info {
            margin-left: 5px;
            position: relative;
            a {
                  position: absolute;
                  top: 8px;
                  left: 8px;
                  width: 88px;
                  font-size: 14px;
                  text-decoration: none;
                
            }
            span {
                  position: absolute;
                  display: inline-block;
                  width: 150px;
                  left: 8px;
                  top: 30px;
                  font-size: 12px;
                  color: #969696;
                   
            }   
      }
      .attention{
            position: absolute;
            top: 21px;
            right: 0px;
            font-size: 13px;
            color: #42c02e;
            text-decoration: none;
      }
`
export const WriterMore = styled.div`
     margin-top: 20px;
     padding: 7px 7px 7px 12px;
     font-size: 13px;
     color: #787878;
     background-color: #f7f7f7;
     border: 1px solid #dcdcdc;
     border-radius: 4px;
     text-align: center;
     cursor: pointer;
     height: 18px;
     line-height: 18px;
}
`