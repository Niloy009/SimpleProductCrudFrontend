import axios from "axios";

class User {
    login(data) {
        axios.post('http://127.0.0.1:8000/api/auth/login', data)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }

}

export default User;