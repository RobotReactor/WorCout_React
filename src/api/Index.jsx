import React from 'react';
import axios from 'axios';
import { accountService } from '@/_services';


export const BASE_URL = 'http://localhost:4000/';

const user = accountService.userValue;

export const ENDPOINTS = {
    Workouts: 'Workouts'
}

function createAPIEndpoint (endpoint) {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return {
        fetch: () => axios.get(url+'?user_id=1'),
        fetchById: id => axios.get(url + id),
        post: newEntry => axios.post(url, newEntry),
        put: (id, updateEntry) => axios.put(url + id, updateEntry),
        delete: id => axios.delete(url + id), 
    }
}

export { createAPIEndpoint };