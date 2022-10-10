window.onload = () => {
    const form = document.getElementById('form');

    

    form.addEventListener('submit',function(e) {
        e.preventDefault();

        const formData = new FormData(this);
        let options = {
            method: "post",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            },
            body: formData
        };
    
        fetch('http://localhost/projeto_crud/api/createData.php', options)
        .then((response) => response.json())
        .then((response) => {
            if(response.success){
                alert(response.success);
            }            
        })
        .catch(function(error){
            alert("Erro: ",error);
        });
    });
}
   

