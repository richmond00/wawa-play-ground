import axios, { Axios, AxiosResponse } from 'axios';

interface Post {
  userId: string;
  id: number;
  title: string;
  body: string;
}
interface Created {}
interface Data { title: string; body: string; userId: number; }

(async() => {
  try {
    const response = await axios.get<Post, AxiosResponse<Post>>('http://jsonplaceholder.typicode.com/posts/1');
    const response2 = await axios.post<Created, AxiosResponse<Created>, Data>('http://jsonplaceholder.typicode.com/posts', {
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
    const response3 = await axios({
      method: 'post',
      url: '',
      data: {
        title: 'foo',
        body: 'bar',
        userId: 1,
      }
    })

    console.log(response.data);
    console.log(response.data.userId);
    console.log(response.data.id);
    console.log(response.data.title);
    console.log(response.data.body);
  } catch(error) {

  }
})();