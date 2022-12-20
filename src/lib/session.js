import axios from 'axios';

const CSRF_COOKIE_NAME = 'csrftoken';
const CSRF_HEADER_NAME = 'X-CSRFToken';

const session = axios.create({
  xsrfCookieName: CSRF_COOKIE_NAME,
  xsrfHeaderName: CSRF_HEADER_NAME,

  // baseURL: 'http://localhost:3131/api/',
  // baseURL: 'http://122.34.222.210:3131/',
  timeout: 30000,
});

export default session;
