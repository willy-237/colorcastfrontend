import TourModel from "../Model/tourModel.js";

const listToursByCity = async (req, res) => {
    try {
        const city = req.params.city
        const cityRegex = new RegExp(city, "i")
        let tours = await TourModel.find({city: cityRegex});
        if(tours.length === 0){
            return res.status(200).json({
                message: `pas de tournées prévu à ${city}`
            })
        }
        return res.json(tours)
    }catch (err){
        return res.status(400).json({
            error: "erreur ne peut pas retourner des tournées"
        })
    }
}

export default { listToursByCity }
