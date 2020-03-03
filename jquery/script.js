if(jQuery){
    console.log('Loaded');
} else {
    console.log('Not Loaded');
}

$.ajax({
    type: 'GET',
    url: 'https://www.bershka.com/itxrest/2/catalog/store/45109523/40259532/category?languageId=-1&typeCatalog=1&appId=1',
    success: (data) => {
        console.log(data.categories[0].attachments);
        let img = document.createElement('img');
        let imgTwo = document.createElement('img');
    }
});