const { getDocuments } = require('outstatic/server');

async function test() {
  try {
    const docs = await getDocuments('templates', ['slug']);
    console.log('Total templates found by getDocuments:', docs.length);
  } catch (e) {
    console.error('Error:', e);
  }
}

test();
