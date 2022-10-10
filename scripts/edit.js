window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const message = urlParams.get('message'); 
    if(message){
        alert(message);
    }   
    getAllData(id);
    
};

function getAllData(id) {
    fetch('http://localhost/projeto_crud/api/getData.php?id='+id)
        .then((data) => data.json())
        .then((data) => {
            constructFormData(data);
        });
}

function constructFormData(data){

    if(data.hasOwnProperty('error')){
        alert(data['error']);
        document.getElementById("boxSave").remove();
        return false;
    }

    let inputs;
    data.forEach(function(input){
        inputs = `
        <div class="md:flex">
            <div class="md:flex flex-col md:w-1/2 p-2">
                <label>Modelo *</label>
                <input class="border border-neutral-500 rounded mt-2  p-2 text-lg w-full"
                    type="text" name="model" id="" placeholder="Modelo" value="${input.model}">
            </div>
            <div class="md:flex flex-col md:w-1/2 p-2">
                <label>Fabricante *</label>
                <input class="border border-neutral-500 rounded mt-2 p-2 text-lg w-full"
                    name="carbrand_name" id="" placeholder="Marca" value="${input.carbrand_name}">
                <input name='id' type='hidden' value='${input.id_vehicle}'>
            </div>
        </div>
        <div class="md:flex">
            <div class="md:flex md:w-1/2">
                <div class="md:flex md:w-1/2 flex-col p-2">
                    <label>Ano Fabricação *</label>
                    <input class="border border-neutral-500 rounded mt-2 p-2 text-lg w-full w-full"
                        name="year_manufacture" placeholder="Ano Fabricação" type="number" min="1900" max="2099" step="1" value="${input.year_manufacture}">
                </div>
                <div class="md:flex md:w-1/2 flex-col p-2">
                    <label>Ano Modelo *</label>
                    <input class="border border-neutral-500 rounded mt-2 p-2 text-lg w-full w-full"
                        name="year_model" placeholder="Ano Modelo" type="number" min="1900" max="2099" step="1" value="${input.year_model}">
                </div>
            </div>
            <div class="w-full md:flex md:w-1/2 flex-col p-2">
                <label>Categoria *</label>
                <input class="border border-neutral-500 rounded mt-2 p-2 text-lg w-full" type="text"
                    name="category" placeholder="Categoria" value="${input.category}">
            </div>
        </div>`;
    });

    document.getElementById('formBox').innerHTML = inputs;  
}
