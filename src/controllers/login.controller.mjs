export const login = async (req, res) => {
    try {
      console.log(req.body); 
      res.status(200).json({ ok: true, message: "Login exitoso (falso positivo)" });
  
    } catch (err) {
      res.status(500).json({ ok: false, message: "Error en el servidor: " + err });
    }
  };