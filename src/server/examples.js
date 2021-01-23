/******        examples  ******/
/* ====================================================*/
import Request from '../utils/request'

// search
export const getQuestions = params => {
    Request.get('/questionData', params)
}
