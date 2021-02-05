// 引入mockjs
const { produceNewsData } = require('./home')
const Mock = require('mockjs')

// // 拦截ajax请求，配置mock的数据
Mock.mock('/api/articles', 'get', produceNewsData)

/******************* */
// For Examples

const {
    questionData,
    choiceQuestionLists,
    delChoiceQuestion,
    editChoices,
} = require('./examples')
// search
Mock.mock('/api/questionData', 'get', questionData)

// choice-question
Mock.mock('/api/choiceQuestionLists', 'get', choiceQuestionLists)
Mock.mock('/api/delChoiceQuestion', 'post', options =>
    delChoiceQuestion(options)
)
Mock.mock('/api/editChoices', 'post', options => editChoices(options))
