const path = require("path")
module.exports = {
    //https://mtop.damai.cn/h5/mtop.damai.wireless.search.search/1.0/?jsv=2.5.0&appKey=12574478&t=1565160565244&sign=025b89a7b281feaba51e56384896cce0&type=originaljson&dataType=json&v=1.0&H5Request=true&AntiCreep=true&AntiFlood=true&api=mtop.damai.wireless.search.search&data=%7B%22cityId%22%3A0%2C%22longitude%22%3A0%2C%22latitude%22%3A0%2C%22pageIndex%22%3A%221%22%2C%22pageSize%22%3A10%2C%22sortType%22%3A%223%22%2C%22categoryId%22%3A%220%22%2C%22startDate%22%3A%22%22%2C%22endDate%22%3A%22%22%2C%22option%22%3A31%2C%22sourceType%22%3A21%2C%22returnItemOption%22%3A4%2C%22dmChannel%22%3A%22damai%40damaih5_h5%22%7D
    devServer:{
        proxy:{
            "/h5":{
                target:"https://mtop.damai.cn",
                changeOrigin:true
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store")
            }
        }
    }
}


