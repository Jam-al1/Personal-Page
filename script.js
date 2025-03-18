document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const image1 = document.getElementById('image1').files[0];
    const image2 = document.getElementById('image2').files[0];

    if (image1 && image2) {
        alert('Images uploaded successfully!');
        // Here you can add code to handle the uploaded images
    } else {
        alert('Please select both images.');
    }
});