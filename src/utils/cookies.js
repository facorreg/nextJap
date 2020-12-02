import Cookies from 'universal-cookie';

const cookies = new Cookies();

const setCookie = (name, value, options) => cookies.set(name, value, options);
const removeCookie = (name, options) => cookies.remove(name, options);
const getCookie = (name, defaultVal, options) => cookies.get(name, options) || defaultVal;

export { setCookie, removeCookie, getCookie };
