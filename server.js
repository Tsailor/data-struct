const http = require('http');
const fs = require('fs');
const path = require('path')
const { URl } = require('url');

let  base = 'http://localhost:7979/';

let server = http.createServer(( req, res) =>{
//     let myUrl = new URL( req.url, base );
   
//     let pathName = myUrl.pathname;
//   if( pathName === '/post'){
        res.end({
            user:45455454,
            imgUrl:'https://cn.bing.com/images/search?view=detailV2&ccid=fq3C%2bDod&id=559013711BE7A05DDBD12F0F467037892E280B54&thid=OIP.fq3C-Dodg9sC0xlCNuB4IQHaLH&mediaurl=http%3a%2f%2fjy.sccnn.com%2fzb_users%2fupload%2f2017%2f01%2fremoteimage2_20170118151850_84849.jpeg&exph=1200&expw=800&q=%e5%9b%be%e7%89%87&simid=608050653849324623&ck=9DAD13CE9A96131EAFA83C9945011888&selectedIndex=0&FORM=IRPRST&ajaxhist=0'
        }) 
    
   

});
server.listen(7979)