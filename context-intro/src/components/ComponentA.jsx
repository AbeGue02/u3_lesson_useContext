import { useContext } from "react"
import DataContext from "../dataContext"
import ComponentC from "./ComponentC"

export default function ComponentA () {
    
    const { userInfo, setUserInfo } = useContext(DataContext)

    return (
        <div className="card">
            <h2>This is component A</h2>
            <p>Hello {userInfo.name}</p>
            <div>
                <ComponentC/>
            </div>
        </div>

    )
}