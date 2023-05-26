import { ADD_FAVORITE,REMOVE_FAVORITE,TOGGLE_FAVORITES } from "../actions/favoritesActions";


const initialState = {
    favorites: [],
    displayFavorites: false
  }
  
   const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {

      case ADD_FAVORITE:
        return {
          ...state,
          favorites:state.favorites.filter(item=>item.id === action.payload.id).length === 0 ? [state.favorites,action.payload]:state.favorites
        }
        case REMOVE_FAVORITE:
          return {
            ...state,
            favorites:state.favorites.filter(item=>item.id !== action.payload.id)
          }
          case TOGGLE_FAVORITES:
            return {
              ...state,
              displayFavorites:!state.displayFavorites  
            }
      default:
        return state;
    }
  }
  export default favoritesReducer;
  