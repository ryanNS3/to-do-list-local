import { CheckRegularGreen } from "../../../assets/Check-Regular";

interface CheckInteface{
    isChecked: boolean;
    onClick: () => void;
    id: string;
}

export function Check({isChecked, onClick, id}: CheckInteface){

    const styleWhenChecked = 'flex justify-center items-center size-4 border-2 w border-green-base bg-green-base hover:bg-green-dark hover:border-green-dark';
    const styleWhenNotChecked = 'flex justify-center items-center size-4 border-2 w border-green-base hover:border-green-dark';
    
    return(
      
            <button id={id} className={isChecked ? styleWhenChecked : styleWhenNotChecked} onClick={onClick} >
                {isChecked ? <CheckRegularGreen/> : <></>}
            </button>
   
    )
}