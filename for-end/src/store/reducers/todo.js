// 拆分出来的 todo 的模块 reducer
export default function todoApp(state = [], action) {

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.name];

    case 'DELETE_TODO':
      let newList = [...state];
      newList.splice(action.index, 1);
      return newList;
    default:
      return state;
  }
}
