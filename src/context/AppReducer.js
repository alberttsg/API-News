
const theme = ( state, action ) => {

  switch(action.type){
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: action.payload
      }

      default:
      return state
  }
  }

  export default theme