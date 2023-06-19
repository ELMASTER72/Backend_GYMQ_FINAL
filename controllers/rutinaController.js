import Rutine from "../model/Rutine.js";

export async function getRutine(req,res){
    const rutine = await Rutine.find();

    if(Rutine){
        res.json({rutine});
    }else{
        res.json({mesaje: "No hay rutinas"})
    }
}

export async function getDescription(req,res){
    const {name} = req.params;

    const find = await Rutine.findOne({name})

    if(find){
        res.json({find});
    }else{
        res.json({ mensaje: "No hay datos" })
    }
}












// import Gym from "../model/Gym.js";

// export async function getGym(req,res){
//     const gym = await Gym.find();

//     if (gym) {
//         res.json({ gym });
//       } else {
//         res.json({ mensaje: "No hay gimnasios" });
//       }

// }

// export async function getInformation(req,res){
//   const {name} = req.params;

//   const find = await Gym.findOne({name})

//   if (find) {
//     res.json({ find });
//   } else {
//     res.json({ mensaje: "No hay datos" });
//   }
  
// }