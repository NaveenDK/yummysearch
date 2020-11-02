import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers:{
        Authorization: 'Bearer Evw4zPfq0gDYfKcI-E04Wv3E2q7ALHHaB4jbE7j2rLFERrOf0EQhEaU3JZcNQawYXfC40UeZiNc68pdC6fNBT-71P3L_OVHEk4i2yub1Y8CSxpHHp5-hANdOfveIX3Yx'

    }
});

//yelp.get('/search')