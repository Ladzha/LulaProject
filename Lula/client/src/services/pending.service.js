import axios from 'axios';

export const PendingService = {

    async getAll() {
        try {
        const response = await axios.get('http://localhost:3001/api/pending')
        if(response){
            return response.data;
        }else{
            console.log('Failed to find audio');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async getById(id) {
        try {
        const response = await axios.get(`http://localhost:3001/api/pending/${id}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to find audio');
        }
        } catch (error) {
            console.log(error);
        }
    }

}