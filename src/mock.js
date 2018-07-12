// 引入mockjs
const Mock = require('mockjs');
// 获取 mock.Random 对象
const Random = Mock.Random;
// mock一组数据
const produceNewsData = function() {
    let articles = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            title: Random.csentence(1, 10), //  Random.csentence( min, max )
            pic: Random.dataImage('150x238', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
            score: Random.number(), // Random.cname() 随机生成一个常见的中文姓名
            tigs: '3DMAX' // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
        }
        articles.push(newArticleObject)
    }
 
    return {
        articles: articles
    }
}
 
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', produceNewsData);