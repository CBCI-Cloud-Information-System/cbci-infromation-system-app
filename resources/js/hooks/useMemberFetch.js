import { useState, useEffect } from 'react';
import axios from 'axios';

// const axios = require('axios');

const members = [];

export const useMemberFetch = () =>{
  const [state, setState] = useState(members);

  const fetchMember = async() => {
    // axios.get('/api/members')
    // .then(function (response) {
    //   setState(response.data.members);
    // })
    // .catch(function (error) {
      
    // })
    // .finally(function () {
      
    // });
    try {
      const response = await axios.get('/api/members');
      setState(response.data.members);
    } catch (error) {
      console.error(error);
    }
  }

  // fetchMember();

  useEffect(() => {
    fetchMember();
  });

  return { state };
}