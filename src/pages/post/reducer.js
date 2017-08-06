
const initialState = {
    data : [],
    editPost: true,
    showAdmin: true,
    fetching: false,
    creating: false
  }

/**
 * id: String
 * idDireccion: String
 * departamento: String
 * idDirec:String
 * Direccion:String
 * name:String
 * adress:String,

 */

export default function post (state = initialState, action) {
  switch(action.type) {
    case 'MENU_ADMIN':
      return {       
         ...state,
        showAdmin: !action.payload,
      }



    case 'FETCH_POST_START':
      return {
        ...state,
        fetching: true,
      }
     case 'FETCH_POST_SUCCESS':
      return {
        ...state,
        fetching: false,
        data: action.payload,
      }
     case 'FETCH_POST_FAILED':
      return {
        ...state,
        fetching: false,
        error: action.error
      }

    case 'EDIT_POST':
      return {
        ...state,
        editPost: !action.payload,
        //data: state.data.map(x => x.id === action.payload.id ? { ...x, ...action.payload } : x)
      }
    // case 'DELETE_POST':
    //   return {
    //     ...state,
    //     data: state.data.filter(x => x.id !== action.payload.id)
    //   }
    default:
      return state
  }
}