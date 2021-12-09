import axios from 'axios'


const Api = axios.create({
  baseURL: 'https://api.pexels.com/v1/',
  headers: {
    authorization: '563492ad6f9170000100000190e90fe86a9f44b69e25c1a410df3998'
  }
})



export const getCuratedList = async () => {
  let { data: json } = await Api.get('/curated')
  return json
}

