import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { LuTrash } from "react-icons/lu";
import { FaRegSave } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import useChange from "../hooks/useChange";


type Props = {
    id?: string
    check?: boolean
    description?: string
    update?: Function
}

export default function ItemCheck({ id = "", check = false, description = "", update = () => { } }: Props) {
    const [itemData, setItemData, onChange] = useChange({ check, description })
    const [isEdit, setIsEdit] = useState(false)


    const handleCancelBtn = () => {
        setIsEdit(prev => false)
        setItemData({ check, description })
    }

    const handleUpdateCheck = () => {
        console.log("handleUpdateCheck")
        update({ id, check })
    }
    const handleUpdate = () => {
        update({ id, description })
        setIsEdit(prev => false)
    }

    return (
        <li className="flex items-center justify-between py-2 border-b border-gray-300 w-full bg-white p-2 rounded-sm">
            <div className="flex gap-4 items-center w-full justify-between">
                <div className="flex items-center w-full">
                    <span className="text-lg font-semibold mr-4">
                        <input name="check" checked={itemData.check} type="checkbox" onChange={onChange} onClick={() => handleUpdateCheck()} />
                    </span>
                    <input disabled={!isEdit} name="description" value={itemData.description} className="text-green-500 font-semibold mt-0 w-full  border-0 border-b-2 focus:ring-0 border-black disabled:text-gray-900" onChange={onChange} />

                </div>
                {/* <img src="https://via.placeholder.com/48" alt="User Avatar" className="w-8 h-8 rounded-full mr-4" /> */}
                <div className="flex gap-2">
                    {
                        isEdit ?
                            <>
                                <FaRegSave className="cursor-pointer" onClick={() => handleUpdate()} />
                                <MdCancel className="cursor-pointer" onClick={() => handleCancelBtn()} />
                            </>
                            :
                            <>
                                <FiEdit className="cursor-pointer" onClick={() => setIsEdit(prev => true)} />
                                <LuTrash className="cursor-pointer" />
                            </>
                    }
                </div>
            </div>
        </li>
    )
}