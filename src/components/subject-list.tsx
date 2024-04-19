import { IoAddCircleOutline } from "react-icons/io5";
import ItemCheck from "./item-check";

export default function SubjectList({ id = "", name = "", typeActivity = "IND", date = new Date() }) {
    return (
        <div className="bg-white p-2 rounded-lg shadow-lg">
            <div className="py-5 flex gap-4 justify-between items-center">
                <span className="text-2xl text-gray-800 font-bold">{name}</span>
                <label className="block w-1/3">
                    <span className="text-gray-700">Tipo de actividad</span>
                    <select
                        className="block w-full mt-0 px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                    >
                        <option>Individual</option>
                        <option>Grupal</option>
                    </select>
                </label>
                {/* <span className="text-green-500 font-semibold">as</span> */}
                <div className="flex items-center gap-2">
                    <label className="block">
                        <span className="text-gray-700">Fecha de entrega</span>
                        <input
                            type="date"
                            className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        />
                    </label>
                    <IoAddCircleOutline className="text-3xl cursor-pointer" />
                </div>
            </div>
            <ul className="flex flex-col gap-2">
                <ItemCheck check={true} description="Creación del documento compartido" />
                <ItemCheck check={true} description="Verificación de noramas apa 7" />
            </ul>
        </div>
    )
}