const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
  };
  
  onmessage = async () => {
    const allPosts = await fetchPosts();
    postMessage(allPosts);
  };