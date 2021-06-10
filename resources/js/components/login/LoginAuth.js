import axios from 'axios';

// const SERVER_URL = "http://dev.semangatngedrakor.my.id";
const login = async (data) => {
    const LOGIN_URL = "http://dev.semangatngedrakor.my.id/api/login";

    try {
    let response = await axios.post(LOGIN_URL, data);

    if (response.status === 200 && response.data.access_token) {
        let token = response.data.access_token;

        // localStorage.setItem("access_token", token);
        // console.log(token);
        // return response.data;
    }
    return response.data;

    } catch(e) {
    console.log(e);
    }
}

// const login = (data) => {
//     axios.post('http://dev.semangatngedrakor.my.id/api/login')
//     .then((res) => {

//     })
// }

const logout = () => {
    localStorage.removeItem("access_token");
}

export { login, logout };