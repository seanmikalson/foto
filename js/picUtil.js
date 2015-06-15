
function compress(image) {
    var canvas = document.createElement('canvas');
    canvas.height = image.height;
    canvas.width = image.width;

    var ctx = canvas.getContext('2d');
    ctx.drawImage(image,0,0);
    var newImageData = canvas.toDataURL('image/jpeg', 0.3);

    var result_image_obj = new Image();
    result_image_obj.src = newImageData;
    return result_image_obj;
}
