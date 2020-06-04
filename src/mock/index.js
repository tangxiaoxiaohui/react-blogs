import Mock from 'mockjs'
import  initAside from './demo'

// Mock.Random 是一个工具类，用于生成各种格式随机数据. 有两种写法:
// Mock.mock('@email')
// Random.email()
// Basic(基本类型)	boolean, natural, integer, float, character, string, range, date, time, datetime, now
// Image(图片)	image, dataImage
// Color(颜色)	color
// Text(文本)	paragraph, sentence, word, title, cparagraph, csentence, cword, ctitle
// Name(名字)	first, last, name, cfirst, clast, cname
// Web(网络)	url, domain, email, ip, tld
// Address(地址)	area, region
// Helper(助手)	capitalize, upper, lower, pick, shuffle
// Miscellaneous()	guid, id

// Mock.valid(template, data): 用来校验真实数据data是否与数据模板template匹配
// var tempObj = { "user|1-3": [{ 'name': '@cname', 'id|18-28': 88 } ]};
// var realData = { "user": [{ 'name': '张三', 'id': 90 } ]};
// console.log(Mock.valid(tempObj, realData));

// Mock.toJSONSchema(template): 用来把Mock.js风格的数据模板template转换成JSON Schema
// var tempObj = { "user|1-3": [{ 'name': '@cname', 'id|18-28': 88 } ]};
// Mock.toJSONSchema(tempObj);

export default function initMock () {
    Mock.setup({ timeout: '200-1000' });  
    initAside()
}