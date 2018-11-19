/*axios
    .get('https://cgq9e5xwrg.execute-api.us-west-2.amazonaws.com/dev/hole')
    .then((response)=>{
        console.log('response', response.data.message.Contents);
    })
    .catch((error)=>{
        console.log('error', error);
});
*/






function renderResults(){
    axios
    .get(`https://cgq9e5xwrg.execute-api.us-west-2.amazonaws.com/dev/hole`)
    .then((response).map(response => {
        console.log(
            response
        )
    }))
    .catch((error)=>{
        console.log(error);
    })
}