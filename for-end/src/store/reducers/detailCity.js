// 拆分出来的 city 的模块 reducer
export default function detailCityApp(state = {}, action) {
  switch(action.type) {
    case 'SET_DETAILCITY':
      return Object.assign({}, state, {
        curCity: action.name
      });

    default:
      return state;
  }
}
