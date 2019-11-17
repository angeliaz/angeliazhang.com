import Mock from 'mockjs';
const Random = Mock.Random;

export default {
  url: '/api/article',
  fakeFn: (req, res) => {
    let list = [];
    for(let i = 0; i < 3; i++) {
      let listObject = {
        id: i,
        title: Random.csentence(5, 10), //随机生成一段中文文本。
        company: Random.csentence(5, 10),
        attention_degree: Random.integer(100, 9999),//返回一个随机的整数。
        photo: Random.image('114x83', '#00405d', '#FFF', 'Mock.js')
      }
      list.push(listObject);
    }
    return {
      code: 0,
      data: list
    }
  }
}
