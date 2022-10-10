window.onload = () => {
    getAllData();

};

function getAllData() {
    fetch('http://localhost/projeto_crud/api/getData.php')
        .then((data) => data.json())
        .then((data) => {
            constructDataOnTable(data)
        });
}

function constructDataOnTable(data) {
    const table = document.getElementById('bodyTable');
    let rowsTable = '';

    if(data.error){
        alert(data.error);    
    }else{
        
        data.map(row => {
            rowsTable +=
                `<tr>
                    <td class="p-2">${row.model}</td>
                    <td class="p-2">${row.carbrand_name}</td>
                    <td class="p-2">${row.year_model}/${row.year_manufacture}</td>
                    <td class="p-2">${row.category}</td>
                    <td class="p-2">
                        <a href="edit.html?id=${row.id_vehicle}" class="text-blue-500 m-2"><i class="fa-solid fa-pen-to-square"></i></a>
                        <a href="javascript:void(0)" onclick="deleteData(${row.id_vehicle})" class="text-red-500 m-2"><i class="fa-solid fa-trash"></i></a>
                    </td>
                </tr>`;
    
        }); 
       
    }
    hiddenloading();
    if(rowsTable){
        table.innerHTML = rowsTable;
    }
}
function hiddenloading() {
    const loading = document.getElementById('loading');
    loading.remove();
}

function deleteData(id) {
    
    const value = 'id='+id;

    let text  = "Deseja mesmo excluir este registro?";
    
    if(confirm(text) == true){

        (async () => {
            const rawResponse = await fetch('api/removeData.php', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: value
            });
            const content = await rawResponse.json();
          
            alert(content.response);
            document.location.reload(true);
          })();
    }
}