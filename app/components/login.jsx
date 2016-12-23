let login = (username, password) => {
  if (username !== 'admin' || password !== 'radical') {
    console.log('incorrect login jsx');
  }
};

// login('admin', 'idunno');
export {login};
