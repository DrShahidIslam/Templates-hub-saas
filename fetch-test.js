fetch('http://localhost:3000/categories/home-lifestyle').then(r => r.text()).then(t => {
  const links = t.match(/href="\/templates\/[^"]+"/g) || [];
  console.log("Template links rendered on home-lifestyle:", links.length);
}).catch(console.error);
