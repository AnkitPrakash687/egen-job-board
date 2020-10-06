export const fetchJobs = (pageNumber) =>{
    return fetch(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?page=${pageNumber}`
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
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?${query}`
    )
}