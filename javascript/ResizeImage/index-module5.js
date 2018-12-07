const Jimp = require("jimp");
const axios = require('axios');

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
                    context.log('calling cog svc');
                    axios.post(process.env.COMP_VISION_URL + 'vision/v1.0/analyze?visualFeatures=Description&language=en', myBlob, {
                        headers: {
                            'Ocp-Apim-Subscription-Key': process.env.COMP_VISION_KEY,
                            'Content-Type': 'application/octet-stream'
                        }
                    }).then(response => {
                        context.log(JSON.stringify(response.data, null, 2));
                        context.bindings.thumbnail = stream;
                        context.done(null, {
                            id: context.bindingData.name,
                            imgPath: "/images/" + context.bindingData.name,
                            thumbnailPath: "/thumbnails/" + context.bindingData.name,
                            description: response.data.description
                        });
                    }).catch(err => {
                        context.log(JSON.stringify(err));
                        context.done(err);
                    });

                }
            });
    });
};
