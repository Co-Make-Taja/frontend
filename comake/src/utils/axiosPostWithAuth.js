import axios from 'axios'

export const axiosPostWithAuth = () => {
    
    const token = localStorage.getItem("token")
    
    axios
        .post(
            "https://bw-comakeapp-java.herokuapp.com/login",
            `grant_type=password&username=${credentials.username}&password=${credentials.password}`,
            {
                headers: {
                    // btoa is converting our client id/client secret into base64
                    Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            },
        )
        .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data.access_token);
            props.history.push("/");
        });
};


