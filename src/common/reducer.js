import {
  CURRENCY_LIST_REQUEST,
  CURRENCY_LIST_RECEIVED,
  CURRENCY_LIST_ERROR,
} from './constants';

function reducer(state = {
  isFetching: false,
  items: {
    data: {}
  },
  status: ''
}, action) {
    switch (action.type) {
      case CURRENCY_LIST_REQUEST:
        return {
          items: {
            data: {}
          },
          isFetching: true,
          status: 'request'
        };
      case CURRENCY_LIST_RECEIVED:
        return {
          isFetching: false,
          items: {
            data: action.result.rates,
          },
          status: 'receiving'
        };
      case CURRENCY_LIST_ERROR:
        return {
          items: [],
          isFetching: false,
          status: action.error
        };
      default:
        return state;
    }
}
// function categoryCreate(state = {
//     isPosting: false,
//     status: '',
//     errors: '',
//     isUpdated: false
// }, action) {
//     switch (action.type) {
//       //CREATE NEW CATEGORY
//       case types.CREATE_CATEGORY_REQUEST:
//         return {
//           items: [],
//           isPosting: true,
//           status: 'creating new category',
//           errors: '',
//           isUpdated: false
//         };
//       case types.CREATE_CATEGORY_RECEIVE:
//         return {
//           items: action.result.data,
//           isPosting: false,
//           status: action.result.message,
//           errors: '',
//           isUpdated: true
//         };
//       case types.CREATE_CATEGORY_ERROR:
//         return {
//           items: [],
//           isPosting: false,
//           status: 'error when creating category',
//           errors: action.error,
//           isUpdated: false
//         };
//       default:
//           return state;
//     }
// }
// function categoryDelete(state = {
//     isPosting: false,
//     status: '',
//     errors: '',
//     isUpdated: false
// }, action) {
//     switch (action.type) {
//       case types.DELETE_CATEGORY_REQUEST:
//         return {
//           items: [],
//           isPosting: true,
//           status: 'delete category',
//           errors: '',
//           isUpdated: false
//         };
//       case types.DELETE_CATEGORY_RECEIVE:
//         return {
//           items: action.result.data,
//           isPosting: false,
//           status: action.result.message,
//           errors: '',
//           isUpdated: true
//         };
//       case types.DELETE_CATEGORY_ERROR:
//         return {
//           items: [],
//           isPosting: false,
//           status: 'error when deleting category',
//           errors: action.error.response.data.message,
//           isUpdated: false
//         };
//       default:
//           return state;
//     }
// }
export default reducer;
// module.exports = {
//     currency,
//     // currencyCreate,
//     // currencyDelete
// };
