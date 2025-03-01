const Navbar = () => {

    const listItem = [
        'Services',
        'price',
        'Blog',
        'Gallery',
        'Lookbook',
        'About',

    ]

    return (
        <div className="fixed bg-black flex justify-between items-center gap-15 py-3 px-10 left-1/2 translate-x-[-50%] top-[20%] rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-10">
            <ul className="flex gap-8 text-xl">
                {listItem.map((item) => (
                    <li key={item} className="relative group cursor-pointer">
                        {item}
                    </li>
                ) )}
            </ul>
            <button className="bg-DeepSkyBlue ml-4 py-1 px-6 rounded-xl shadow-2xl text-white font-semibold">
                Contact
            </button>
        </div>
    )
}

export default Navbar