import { 
  REGISTER_HANDLER,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_HANDLER,
  LOGIN_SUCCESS
} from '../actions';



//set initial state

const initialState = {
  isRegistering: false,
  isRegistered: false,
  registrationError: '',
  loggingIn: false,
  loggedIn: false,
  loginError: '',
  user: {}
}

export const reducer = (state = initialState, action) => {
      switch(action.type){
          case REGISTER_HANDLER:
              return {
                  ...state,
                  isRegistering: true,
                  registationError: ''
              }
          case REGISTER_SUCCESS: 
              return {
                  ...state,
                  isRegistering: false,
                  isRegistered: true,
                  registationError: '',
                  user: action.payload
              }
          case REGISTER_FAILURE:
              return {
                  ...state,
                  registationError: 'error'
              }

          case LOGIN_HANDLER:
              return {
                  ...state,
                  loggingIn: true,
                  loginError: ''
              }
          case LOGIN_SUCCESS:
              return {
                  ...state,
                  loggingIn: false,
                  loggedIn: true,
                  loginError: '',
                  user: {}
              };
            
            default:
              return state;
      }
};