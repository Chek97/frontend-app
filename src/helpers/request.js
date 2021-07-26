//enviroment variable

export const makeRequest = (endpoint, data, method = 'GET') => {

    if(method === 'GET'){
        return fetch(endpoint);
    }else {
        return fetch(endpoint, {
            method, 
            headers: {'Content-type': 'application/json'}, 
            body: JSON.stringify(data)
        });
    }
}