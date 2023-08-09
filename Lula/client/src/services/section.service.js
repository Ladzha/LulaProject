import axios from 'axios';

export const SectionService = {

    async getAll() {
        try {
        const response = await axios.get('http://localhost:3001/api/section')
        if(response){
            return response.data;
        }else{
            console.log('Failed to find section');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async getById(id) {
        try {
        const response = await axios.get(`http://localhost:3001/api/section/${id}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to find section');
        }
        } catch (error) {
            console.log(error);
        }
    }

}