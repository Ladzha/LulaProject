import axios from 'axios';

export const CommentService = {

    async getAll() {
        try {
        const response = await axios.get('http://localhost:3001/api/comment')
        if(response){
            return response.data;
        }else{
            console.log('Failed to find comment');
        }
        } catch (error) {
            console.log(error);
        }
    }

}