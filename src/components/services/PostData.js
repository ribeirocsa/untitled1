export function PostData(type, userData) {
// export function PostData(userData) {
    let BaseURL = 'http://hojeparajantar.zapto.org/api/';

    return new Promise((resolve, reject) => {
        // fetch(BaseURL + type, {
        //     method: 'POST',
        //     body: JSON.stringify(userData)
        // })
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         resolve();
        //     })
        //     .catch((error) => {
        //         reject(error);
        //     });

        fetch(BaseURL + type, {
            method: 'POST',
            credentials: 'same-origin',
            body: userData,
            // headers: {
            //     'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            //     'Content-Type': 'multipart/form-data'
            // }
        }).then(function(response) {
            console.log(response.status);
            console.info(response.body);
        }).catch(err => err);
    });
}