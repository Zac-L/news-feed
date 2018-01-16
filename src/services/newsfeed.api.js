const KEY = '8885b328cd88416c9f9e76a6cc5901ca';
const API_URL = 'https://newsapi.org/v2/everything';

const storage =  window.localStorage;

export function searchNews(searchParams, pageIndex = 0) {
  const url = `${API_URL}?q=${searchParams}&maxResults=20&startIndex=${pageIndex}&apiKey=${KEY}`;

  const data = storage.getItem(url);
  console.log('data', data);
  if(data) return Promise.resolve(JSON.parse(data));

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      storage.setItem(url, JSON.stringify(data));
      return data;
    });
}