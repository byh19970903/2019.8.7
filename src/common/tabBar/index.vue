<template>
<!-- <div class="da"> -->
    <div id="footer">
        <ul>
            <router-link 
            v-for="(item,index) in navs"
            :key="index"
            :to="item.path"
            tag="span"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    <!-- </div> -->
    </div>
</template>

<script>
export default {
    name:"TabBar",
    data(){
        return {
            navs:[
                {
                    // icon:"&#xe717;",
                    text:"全部",
                    path:"/all"
                },
                 {
                    // icon:"&#xe717;",
                    text:"歌手",
                    path:"/songer"
                },
                 {
                    // icon:"&#xe717;",
                    text:"演员",
                    path:"/actor"
                },
                 {
                    // icon:"&#xe717;",
                    text:"演奏家",
                    path:"/performer"
                },
                {
                    // icon:"&#xe61d;",
                    text:"导演",
                    path:"/director"
                },
                {
                    // icon:"&#xe605;",
                    text:"编剧",
                     path:"/adaptor"
                },
                 {
                    // icon:"&#xe605;",
                    text:"编剧导演",
                     path:"/yingyingying"
                },
                 {
                    // icon:"&#xe605;",
                    text:"其他",
                     path:"/otherss"
                },
                
                 {
                    // icon:"&#xe605;",
                    text:"xixixi",
                     path:"/xixixi"
                }
            ]
        }
    }
}
</script>

<style>
/* #da{
    top:0;
    background-color: #eee;
} */
#footer{
    top:0;
  
    left: 0;
    justify-content: center;
    align-items: center;
    /* overflow-x: auto; */
}
ul{
  overflow-x: auto;
  
     height: 1rem;
   
    padding-left: .48rem;
    margin-right: .32rem;
    white-space: nowrap;
    overflow-x: scroll;
    
    -webkit-overflow-scrolling: touch;
  display: flex;
 
  /* background-color: aqua;  */
}
     /* #footer{
        
         
         
        width: 100%;
        height: 1rem;
        position: fixed;
        left: 0;
        bottom:0;
       

       
        /* border-top:1px solid #ccc; 
    }
     */
    /* #footer ul,#footer ul span{
        width: 100%;
        height: 100%;
        
    } */
    /* #footer ul{
        display: flex;
    
    } */
    #footer ul span{
        display: inline-block;
         /* margin-top: .64rem; */
    height: .8rem;
    background: #eee;
    padding: 0 .42667rem;
 
    color: #111;
    text-align: center;
    line-height: .8rem;
    border-radius: .4rem;
    }
    /* #footer ul span i{
        font-size:.4rem;
    }

    #footer ul .router-link-active{
        color:#c33;
    } 
     #footer{
             height: 1.89333rem;
    padding-left: .48rem;
    margin-right: .48rem;
    white-space: nowrap;
    overflow-x: scroll;
     } */
</style>