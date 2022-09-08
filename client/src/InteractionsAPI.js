import axios from 'axios';

const InteractionsAPI = (element, widget) => {
  const data = {
    element, // Selector for the element which was clicked
    widget, // Name of the module/widget in which the click occured
    time: new Date().toISOString(), // Time the interaction occurred
  }

  axios.post(`${process.env.BASE_URI}interactions`, data, {
    headers: {
      'Authorization': process.env.GITHUB_TOKEN
    }
  })
    .then(response => {
      // console.log('response', response);
    })
}

export default InteractionsAPI;