const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API = isLocal ? "http://localhost:5000" : "https://api.projectsmile.world";
export default API;