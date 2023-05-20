const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    videoLink: {type: String},
    description: {type: String},
});

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;