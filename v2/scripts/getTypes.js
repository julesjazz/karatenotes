import client from 'part:@sanity/base/client';
const sanityClient = client.withConfig({
  apiVersion: '2022-04-10',
  dataset: 'production',
});

// sanityClient
//   .get({ query: /* groq */ '*[]_type' })
//   .then(console.log)
//   .catch(console.error);


  /*
  sanity exec scripts/getTypes.js --with-user-token
  */