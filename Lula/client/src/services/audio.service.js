import axios from 'axios';

export const AudioService = {

    async getAll() {
        try {
        const response = await axios.get('http://localhost:3001/api/audio')
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
        const response = await axios.get(`http://localhost:3001/api/audio/${id}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to find audio');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async getByImageId(id) { //not done
        try {
        const response = await axios.get(`http://localhost:3001/api/audio/${id}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to find audio');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async postAudio(userid, recordid, text) { ///Change for audio now it is from component
        try {
        const response = await axios.post(`http://localhost:3001/api/comment/post`, {
            userid, 
            recordid,
            text
        }) 
        if(response){
            return response.data;
        }else{
            console.log('Failed to post audio');
        }
        } catch (error) {
            console.log(error);
        }
    }

}