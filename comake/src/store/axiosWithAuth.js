// import axios from 'axios'

// export const axiosWithAuth = () => {
    
// return
//     axios.create({
//         baseURL:"https://bw-comakeapp-java.herokuapp.com", 
//         headers: {Authorization: `Bearer ${window.localstorage.getItem('token')}`,},});


// };

import axios from "axios";
export const axiosWithAuth = () => {
	return axios.create({
		headers: {
			Authorization: `Bearer ${window.localStorage.getItem("token")}`,
		},
		baseURL: "https://bw-comakeapp-java.herokuapp.com",
	});
};