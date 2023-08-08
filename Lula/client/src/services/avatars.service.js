import axios from 'axios';

export const AvatarService = {

    async getAll() {
        try {
        const response = await axios.get('http://localhost:3001/api/avatar')
        if(response){
            return response.data;
        }else{
            console.log('Failed to find avatar');
        }
        } catch (error) {
            console.log(error);
        }
    }

}