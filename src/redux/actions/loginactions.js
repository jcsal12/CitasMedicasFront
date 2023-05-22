

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (username, password) => {
  console.log({ username, password });
   return (dispatch) => {
    // dispatch(loginRequest());
      fetch('http://localhost:8080/login', {
      method: 'POST',
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => response.text())
    .then(data => console.log(data));
    
      // .then((response) => {
      //   // if (!response.ok) {
      //   //   throw new Error('Network response was not ok');
      //   // }
      //   const prueba = response.text();
      //   console.log(prueba);
      //   return prueba;
      // })
      // .then((data) => {
      //   // dispatch(loginSuccess(data.token));
      //   console.log(data);
      // })
      // .catch((error) => {
      //   // console.log(error);
      //    dispatch(loginFailure(error.message));
      // });
  };
 };

export const loginRequest = () => {
  return {
    type: 'LOGIN_REQUEST',
  };
};

export const loginSuccess = (token) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: token,
  };
};

export const loginFailure = (error) => {
  return {
    type: 'LOGIN_FAILURE',
    payload: error,
  };
};