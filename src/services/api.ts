import axios from 'axios'


const api = axios.create({
  baseURL: 'https://api.pexels.com/v1/'
})

const apiKey = '563492ad6f9170000100000190e90fe86a9f44b69e25c1a410df3998';


export const getCuratedList = async () => {
  let { data: json } = await api.get('/curated')
  return json
}
