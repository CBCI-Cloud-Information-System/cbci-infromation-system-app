import { useState, useEffect } from 'react';
import axios from 'axios';
import API from '../api';

export const useMemberFetch = () =>{
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMember = async() => {
    setLoading(true);
    try {
      const response = await axios.get('/api/members');
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }


  useEffect(() => {
    setLoading(true);
    API.fetchMember().then(res => {
      setState(res.data.members);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
    });
  }, []);

  return { state, loading };
}