import { useState } from 'react';
import { Box, TextField, Button, Typography, Paper, Alert } from '@mui/material';

export const MiCuenta = () => {
  // 1. Estados para los datos y errores
  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [success, setSuccess] = useState(false);

  // 2. Manejador de cambios
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Limpiamos errores mientras el usuario escribe
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // 3. Lógica de validación
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = { email: '', password: '' };

    // Validar Email (No vacío y formato)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = 'El email es obligatorio';
      valid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = 'Formato de email inválido';
      valid = false;
    }

    // Validar Contraseña (Mínimo 6 caracteres)
    if (!form.password) {
      newErrors.password = 'La contraseña es obligatoria';
      valid = false;
    } else if (form.password.length < 6) {
      newErrors.password = 'Mínimo 6 caracteres';
      valid = false;
    }

    if (valid) {
      setSuccess(true);
      console.log('Datos validados:', form);
    } else {
      setErrors(newErrors);
      setSuccess(false);
    }
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 8, px: 2 }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%', borderRadius: 4 }}>
        <Typography variant="h5" fontWeight={700} gutterBottom align="center">
          Iniciar Sesión
        </Typography>

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            ¡Inicio de sesión exitoso! (Simulado)
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Correo Electrónico"
            name="email"
            margin="normal"
            value={form.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label="Contraseña"
            name="password"
            type="password"
            margin="normal"
            value={form.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button
            fullWidth
            type="submit"
            variant="contained"
            size="large"
            sx={{ mt: 3, py: 1.5, fontWeight: 700, borderRadius: 2 }}
          >
            Entrar
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};