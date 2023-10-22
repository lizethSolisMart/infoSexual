export default function NavBar() {
    return (
        <div className="bg-ffc0cb p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    InfoSexual
                </div>

                {/* Enlace "Acerca de" */}
                <div>
                    <a href="#" className="text-gray-700 hover:text-gray-900">
                        Acerca de
                    </a>
                </div>
            </div>
        </div>
    )
}
