const API_URL = 'https://interview.tripresso.com/tour/search';

export async function listData(){
    const response = await fetch(API_URL);
    return response.json(); 
}
