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
    data.map(row => {
        rowsTable +=
            `<tr>
                <td class="p-2">${row.model}</td>
                <td class="p-2">${row.carbrand_name}</td>
                <td class="p-2">${row.year_model}/${row.year_manufacture}</td>
                <td class="p-2">${row.category}</td>
                <td class="p-2">
                    <a href="${row.model}" class="text-blue-500 m-2"><i class="fa-solid fa-pen-to-square"></i></a>
                    <a href="javascript:void()" onclick="deleteData(${row.id_vehicle})" class="text-red-500 m-2"><i class="fa-solid fa-trash"></i></a>
                </td>
            </tr>`;

    }); 
    setTimeout(() => {
        hiddenloading();
        table.innerHTML = rowsTable;
    }, 2000);


}
function hiddenloading() {
    const loading = document.getElementById('loading');
    loading.remove();
}

function deleteData(id) {
    confirm(id);
}