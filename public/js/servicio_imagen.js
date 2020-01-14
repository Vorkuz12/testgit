$(function() {
    let imagenUrl = '';
    // Configure Cloudinary
    // with credentials available on
    // your Cloudinary account dashboard
    $.cloudinary.config({ cloud_name: 'dsdwhecjb', api_key: '177338318164857'});

    // Upload button
    let uploadButton = $('#imagen');

    // Upload button event
    uploadButton.on('click', function(e){
        // Initiate upload
        cloudinary.openUploadWidget({ cloud_name: 'dsdwhecjb', upload_preset: 'german', tags: ['cgal']},
        function(error, result) {
            if(error) console.log(error);
            // If NO error, log image data to console
            let id = result[0].public_id;
             console.log(id);
            imagenUrl = 'https://res.cloudinary.com/dsdwhecjb/image/upload/' + id ;
            document.querySelector('#imagen_preview').src = imagenUrl;
          console.log(imagenUrl);
        });
    });
})

function processImage(id) {
    let options = {
        client_hints: true,
    };
    return  $.cloudinary.url(id, options);
}