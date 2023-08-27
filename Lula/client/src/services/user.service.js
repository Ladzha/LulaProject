import axios from 'axios';

export const UserService = {

    async getAll() {
        try {
        const response = await axios.get('http://localhost:3001/api/users')
        if(response){
            return response.data;
        }else{
            console.log('Failed to find users');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async getById(id) {
        try {
        const response = await axios.get(`http://localhost:3001/api/users/${id}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to find user');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async register(username, firstname, lastname, email, password ) {
        try {
        const response = await axios.post(`http://localhost:3001/api/users/register`, {
            username,
            firstname,
            lastname,
            email,
            password
        }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        if(response && response.data){
            return response.data;
        }else{
            console.log('Failed to register user');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async login(username, password ) {
        try {
        const response = await axios.post('http://localhost:3001/api/users/login', {
            username,
            password

        }, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
        if(response.status === 200 && response.data){
            return response.data;
        }else{
            console.log('Failed to login user');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async logout() {
        try {
        const response = await axios.delete('http://localhost:3001/api/users/logout');
        if (response.status === 200) {
        }
        } catch(error) {
        console.log(error);
        }
    },

    async updateById(id) {
        try {
        const response = await axios.put(`http://localhost:3001/api/users/update/${id}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to update user');
        }
        } catch (error) {
            console.log(error);
        }
    },
}
