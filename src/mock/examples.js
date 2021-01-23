const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const questionData = function() {
    let questions = []
    for (let i = 0; i < 100; i++) {
        let quesObject = {
            title: Random.csentence(5, 30), //  Random.csentence( min, max )
            id: Random.integer(100000, 999999),
            desc: ['困难', '中等', '简单'][Random.integer(0, 2)],
        }
        questions.push(quesObject)
    }
    return {
        data: questions,
    }
}

module.exports = {
    questionData,
}
