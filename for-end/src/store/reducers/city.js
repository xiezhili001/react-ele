// 拆分出来的 city 的模块 reducer
export default function cityApp(state = {}, action) {
  switch(action.type) {
    case 'SET_CURCITY':
      return Object.assign({}, state, {
        curCity: action.name
      });

    default:
      return state;
  }
}
