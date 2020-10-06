
const BASE_URL = "https://cors-anywhere.herokuapp.com/https://jobs.github.com"
export const fetchJobs = (pageNumber) =>{
    return fetch(
        `${BASE_URL}/positions.json?page=${pageNumber}`
      )
}

export const searchJobs = (location, title, pageNumber) =>{
    let query = ""
    if(!location){
        query = `search=${title}`
    }else if(!title){
        query = `location=${location}`
    }else if(location && title){
        query = `location=${location}&search=${title}`
    }
    query = query + `&page=${pageNumber}`
    console.log(query)
    return fetch(
        `${BASE_URL}/positions.json?${query}`
    )
}

export const fetchJobById = (id) =>{
    return fetch(
        `${BASE_URL}/positions/${id}.json`
    )
}