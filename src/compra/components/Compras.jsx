import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

export const Compras = () => {
    return (
        <>
            <Box sx={{ px: 4, py: 6, backgroundColor: '#d8d8d8' }}>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 1 }}>
                    MIS COMPRAS
                </Typography>
                
                <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Aqui podras visualizar todas las compras agregadas
                </Typography>
            </Box>
        </>
    )
}
