import axios from "axios"

export const getProducts = () => (dispatch) => {
  axios.post('http://localhost:3001/get-products', { params: 'hello' })
    .then((res) => {
      console.log(`res`, res)
    });

};