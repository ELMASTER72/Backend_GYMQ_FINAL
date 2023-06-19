import Gym from "../model/Gym.js";

export async function getGym(req,res){
    const gym = await Gym.find();

    if (gym) {
        res.json({ gym });
      } else {
        res.json({ mensaje: "No hay gimnasios" });
      }

}

export async function getInformation(req,res){
  const {name} = req.params;

  const find = await Gym.findOne({name})

  if (find) {
    res.json({ find });
  } else {
    res.json({ mensaje: "No hay datos" });
  }
  
}