const Jimp = require("jimp");

module.exports = function (context, myBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    Jimp.read(myBlob).then(image => {
        image
            .cover(200, 200) 
            .quality(60)
            .getBuffer(Jimp.MIME_JPEG, (error, stream) => {
                if (error) {
                    context.done(error);
                } else {
                    context.bindings.thumbnail = stream;
                    context.done(null, {
                        id: context.bindingData.name,
                        imgPath: "/images/" + context.bindingData.name,
                        thumbnailPath: "/thumbnails/" + context.bindingData.name
                    });
                }
            });
    });
};