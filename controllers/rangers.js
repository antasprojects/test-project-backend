const Ranger = require("../models/Ranger")


const index = async (req, res) => {
    try {
        const rangers = await Ranger.getAll()
        res.status(200).json({
            success: true,
            rangers: rangers
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: "Unable to retrieve Power Rangers",
            error: err
        })
    }
}


module.exports = { index }