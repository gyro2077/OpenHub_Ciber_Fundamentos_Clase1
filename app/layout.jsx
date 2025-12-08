import './globals.css'

export const metadata = {
    title: 'Virtualización & Linux Ofensivo',
    description: 'Guía Maestra para Iniciar en Ciberseguridad',
}

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body className="bg-slate-950">{children}</body>
        </html>
    )
}
