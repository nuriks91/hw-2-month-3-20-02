const content = document.getElementById('content')

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    content.innerHTML += `<div class="block">
                                <img src="${element.image}" alt="">
                                <h1>${element.name}</h1>
                          </div>`
    
}

function Search() {
    const inputValue = input.value.toLowerCase();
    
    if (inputValue === "") {
        content.innerHTML = "";
        renderItems(data);
    } else {
        const newArray = data.filter((item) => {
            return item.name.toLowerCase().includes(inputValue);
        });

        content.innerHTML = "";
        renderItems(newArray);
    }
}