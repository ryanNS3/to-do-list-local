import type { taskInterface } from "../../@Types/taskInterface";
import { PencilSimpleRegular, PencilSimpleGray } from "../../assets/PencilSimple-Regular";
import { TrashGray } from "../../assets/TrashRegular";
import { Check } from "../Form/Check";


export function CardTask({text,status,isEditing,handleChangeText,handleChangeStatus,handleEdit,handleDelete,id} : taskInterface){


    // box-shadow: 0px 4px 8px rgba(54, 23, 45, 0.05);

    return(
        <article set-idTarefa={id} className=" flex flex-1 w-full max-h-[64px] border-2 border-gray-200 rounded-lg  justify-between items-center p-5 max-w-[504px] shadow-[0px_4px_rgba(54, 23, 45, 0.05)]">
            <Check isChecked={status} onClick={handleChangeStatus} id={id}/>

            <div>
                <textarea set-idTarefa={id} value={text} placeholder={isEditing?"Digite o nome da sua tarefa":""} onChange={handleChangeText} disabled={!isEditing} className="resize-none w-full h-full text-start focus:outline-none text-body-md overflow-hidden enabled:border-b-2 enabled:border-b-pink-base" cols={44} rows={1}>{text}</textarea>
            </div>

            <div className="flex z-[999999] gap-2">
                <button className="z-[999999] " onClick={handleDelete} set-idTarefa={id}><TrashGray size={20}/></button>
                <button className="z-[99999]" onClick={handleEdit} set-idTarefa={id}><PencilSimpleRegular size={18}/></button>
                
            </div>

        </article>
    )
}