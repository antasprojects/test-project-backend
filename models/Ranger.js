const db = require("../db/connect")


class Ranger {
    constructor({ ranger_id, name, color, series, home_planet, zord}) {
        this.ranger_id = ranger_id
        this.name = name
        this.color = color 
        this.series = series
        this.home_planet = home_planet
        this.zord = zord  
    }

    static async getAll() {
        try {
            const { rows } = await db.query("SELECT * FROM power_rangers;")
            if (!rows.length) {
              throw new Error("No power rangers found")
            }
            return rows.map((ranger) => new Ranger(ranger))
          } catch (error) {
            throw new Error("Error fetching power rangers")
          }
    }
}

module.exports = Ranger