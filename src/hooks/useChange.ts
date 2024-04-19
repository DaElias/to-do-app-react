import { useState } from "react"



export default function useChange(initialValue: any) {
    const [date, setDate] = useState(initialValue)

    const onChange = (e: any) => {
        const { name, value } = e.target
        setDate((prev: any) => {

            if (name == "check") {
                return {
                    ...prev, [name]: !prev.check
                }
            }

            return {
                ...prev, [name]: value
            }
        })
    }


    return [date, setDate, onChange]
}