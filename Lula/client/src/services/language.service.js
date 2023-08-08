import axios from 'axios';

export const LanguageService = {

    async getAll() {
        try {
        const response = await axios.get('http://localhost:3001/api/language')
        if(response){
            return response.data;
        }else{
            console.log('Failed to find language');
        }
        } catch (error) {
            console.log(error);
        }
    }

}