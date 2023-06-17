

const apiSettings = {
  fetchMember: async() => {
    try {
      const response = await axios.get('/api/members');
      return response;
    } catch (error) {
      console.error(error);
    }
  },

}

export default apiSettings;