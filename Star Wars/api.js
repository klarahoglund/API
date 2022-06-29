


let btn = document.querySelector('#btn');


btn.addEventListener('click', getApi);



function getApi(e) {
    e.preventDefault();
    textoutput.innerHTML = '';
    let input = document.querySelector('#input').value;
    fetch('https://www.swapi.tech/api/people/?name=' + input, {
        method: 'GET',
        header: { 'Accept': 'application/json' }

    })
        .then(res => res.json())
        .then(data => {

            console.log(data);
            let obj = data.result[0];


            textoutput.innerHTML +=
                `<h1>${obj.properties.height}</h1>` +
                "This character`s name is " + obj.properties.name + ".\nHieght: " + obj.properties.height + "\nGender: " + obj.properties.gender + "\nHair color: " + obj.properties.hair_color;
            test




        })


        .catch(err => console.log(err));
}