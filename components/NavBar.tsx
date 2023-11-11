import Link from "next/link";

export default function NavBar() {
    // Define tus colores personalizados
    const textColor = "FFFFFF";
    const hoverColor = "C78DF8";  // Este es un color supuesto para el hover, ajustalo a tus necesidades

    return (
        <div style={{ backgroundColor: '#FFFFFF60' }} className="p-4 shadow-md ">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href={"/"}>
                    <h2 style={{ color: `#${textColor}` }} className="text-2xl font-bold hover:text-[#${hoverColor}]">
                        InfoSexual
                    </h2>
                </Link>

                {/* Enlace "Acerca de" */}
                <h2 style={{ color: `#${textColor}` }} className="text-white hover:text-[#${hoverColor}]">
                    Acerca de
                </h2>
            </div>
        </div>
    );
}
