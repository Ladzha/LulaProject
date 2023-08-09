import axios from 'axios';

export const ImgService = {

    async getAll() {
        try {
        const response = await axios.get('http://localhost:3001/api/img')
        if(response){
            return response.data;
        }else{
            console.log('Failed to find img');
        }
        } catch (error) {
            console.log(error);
        }
    },
    async getById(id) {
        try {
        const response = await axios.get(`http://localhost:3001/api/img/${id}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to find img');
        }
        } catch (error) {
            console.log(error);
        }
    }


}