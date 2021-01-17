/* eslint-disable import/no-anonymous-default-export */
//eslint-disable-next-line
import axios from "axios";

export default{
    getRandomList: function(){
        return axios.get("https://randomuser.me/api/?results=10&nat=us");
    },

    getRandomNational: function(nationCode){
        return axios.get(`https://randomuser.me/api/?nat=${nationCode}/?results=20/?exc=login`);
    }
}