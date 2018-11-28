const submit = document.querySelector('#render').addEventListener('click', renderResults);

function renderResults(){
    axios
    .get(`https://cgq9e5xwrg.execute-api.us-west-2.amazonaws.com/dev/hole`)
    .then((response.data.data.message.Contents).map(x => {
        console.log(x);
        /*let cardTemplate = `
            <div class = 'card'>
                <img src = 'https://s3-us-west-2.amazonaws.com/treasure-chest-capstone/${x.key}'
            </div>
        `
        let newCard = document.createElement('div');
        cardTemplate.appendChild(newCard).className='card';
        newCard.innerHTML = cardTemplate;*/
    }))
    .catch((error)=>{
        console.log(error);
    })
}