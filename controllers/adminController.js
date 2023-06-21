import UserModel from '../model/User.model.js'
import Product from '../model/Product.js';

export async function getUserall(req,res){
    const User = await UserModel.find();

    if (User) {
        res.json({ User });
      } else {
        res.json({ mensaje: "No hay Usuarios" });
      }

}

export async function deleteUser(req,res){
    const userId = req.params._id;

  try {
    const deletedUser = await UserModel.findOneAndDelete({ _id: userId });

    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar el usuario' });
  }
}

export async function updateUser(req, res) {
    const userId = req.params._id;
    const updateData = req.body; // Datos actualizados del usuario
  
    try {
      const updatedUser = await UserModel.findOneAndUpdate({ _id: userId }, updateData, {
        new: true, // Devuelve el documento actualizado
        runValidators: true, // Ejecuta las validaciones del esquema de Mongoose
      });
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      return res.json({ message: 'Usuario actualizado correctamente', user: updatedUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al actualizar el usuario' });
    }
  }

  export async function createUser(req, res) {
    const userData = req.body; // Datos del nuevo usuario
  
    try {
      const newUser = await UserModel.create(userData);
      return res.json({ message: 'Usuario creado correctamente', user: newUser });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al crear el usuario' });
    }
  }


  export async function getProductall(req,res){
    const product = await Product.find();

    if (product) {
        res.json({ product });
      } else {
        res.json({ mensaje: "No hay Productos" });
      }

}

export async function CreateProduct(req,res){
    const productData = req.body;
    try {
        const newProduct = await Product.create(productData);
        return res.json({ message: 'Producto creado correctamente', Product: newProduct });
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el Producto' });
    }
}

export async function updatedProduct(req, res) {
    const productId = req.params._id;
    const updateData = req.body; // Datos actualizados del usuario
  
    try {
      const updatedProduct = await Product.findOneAndUpdate({ _id: productId }, updateData, {
        new: true, // Devuelve el documento actualizado
        runValidators: true, // Ejecuta las validaciones del esquema de Mongoose
      });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      return res.json({ message: 'Producto actualizado correctamente', product: updatedProduct });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error al actualizar el Producto' });
    }
  }

  export async function deleteProduct(req,res){
    const productId = req.params._id;

  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: productId });

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    return res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al eliminar el Producto' });
  }
}