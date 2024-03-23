import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormFormik = () => {
  //   const [user, setUser] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleChange = (e) => {
  //     setUser({ ...user, [e.target.name]: e.target.value });
  //   };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (data) => {
      console.log(data);
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, "Debe tener al menos 5 carácteres")
        .required("Campo requerido"),
      email: Yup.string()
        .email("Debes ingresar un email válido")
        .required("Campo requerido"),
      password: Yup.string()
        .required("Campo requerido")
        .min(6, "Debe tener al menos 6 carácteres")
        .max(12, "Debe tener máximo 12 carácteres")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
          "Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial"
        ),
      confirmPassword: Yup.string()
        .required("Campo requerido")
        .oneOf([Yup.ref("password")], "La contraseña no coincide"),
    }),
    validateOnChange: false,
  });
  //   console.log(errors);
  return (
    <div style={{ padding: "40px", display: "flex", justifyContent: "center" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "20px",
        }}
      >
        <TextField
          label="Nombre"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password ? true : false}
          helperText={errors.password}
        />
        <TextField
          label="Confirmar contraseña"
          variant="outlined"
          name="confirmPassword"
          onChange={handleChange}
          error={errors.confirmPassword ? true : false}
          helperText={errors.confirmPassword}
        />
        <Box
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button type="submit" variant="contained" sx={{ width: 200 }}>
            Enviar
          </Button>
        </Box>
      </form>
    </div>
  );
};
