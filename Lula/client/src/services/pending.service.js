import axios from 'axios';

export const PendingService = {

    async getAll() {
        console.log('pending');
        try {
        const response = await axios.get('http://localhost:3001/api/pending')
        if(response){
            console.log(response.data);
            return response.data;
        }else{
            console.log('Failed to find audio');
        }
        } catch (error) {
            console.log(error);
        }
    },


    
    async getById(recordid) {
        try {
        const response = await axios.get(`http://localhost:3001/api/pending/${recordid}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to find audio');
        }
        } catch (error) {
            console.log(error);
        }
    },

    async postAudio(userid, name, link, imgid) { 
        try {
        const response = await axios.post(`http://localhost:3001/api/audio/post`, {
            userid, 
            name,
            link,
            imgid
        }) 
        if(response){
            return response.data;
        }else{
            console.log('Failed to post audio');
        }
        } catch (error) {
            console.log(error);
        }
    },


    async getAudioWithUserInfo(recordid) {
        try {
          const response = await axios.get(`http://localhost:3001/api/pending/info/userinfo/${recordid}`);
          if (response) {
            return response.data;
          } else {
            console.log('Failed to fetch pending audio with user info');
          }
        } catch (error) {
          console.log(error);
        }
    },


    async deleteById(recordid) {
        try {
        const response = await axios.delete(`http://localhost:3001/api/pending/delete/${recordid}`)
        if(response){
            return response.data;
        }else{
            console.log('Failed to delete audio');
        }
        } catch (error) {
            console.log(error);
        }
    }

}