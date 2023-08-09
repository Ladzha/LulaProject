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
    }
}

