import { TrashGray, TrashPink, TrashRegular } from "../../../assets/TrashRegular";


export function TrashPrimary({onClick}: any ){
    return(
        <button onClick={onClick} className=" p-1 bg-green-base rounded-b-lg hover:bg-green-dark">
            <TrashRegular/>
        </button>
    )
}


export function TrashSecondary({onClick}: any ){
    return(
        <button onClick={onClick} className=" p-1 bg-gray-200 rounded-b-lg hover:bg-pink-base hover:text-gray-200">
            <TrashPink/>    
        </button>
    )
}

export function TrashTerciary({onClick}: any ){
    return(
        <button onClick={onClick} className=" p-1 bg-white rounded-b-lg hover:bg-gray-200">
            <TrashGray/>
        </button>
    )
}