/* 
  \d 任意一个数字，0~9 中的任意一个
  \w 任意一个字母或数字或下划线，也就是 A~Z,a~z,0~9,_ 中任意一个
  \s 包括空格、制表符、换页符等空白字符的其中任意一个
. 小数点可以匹配除了换行符（\n）以外的任意一个字符 
*/

const str = '2019年10月9日 12:00'
// const str1 = str.replace(/([\u4e00-\u9fa5])/g, '-')

const str2 = str.replace(/([\u4e00-\u9fa5])/g, '$1-')

const str3 = str.replace(/(\d+)([\u4e00-\u9fa5])/g, (match, p1, offset) => {
  console.log(1, match, p1, offset)
  return p1 + '-'
})
console.log(str3)
