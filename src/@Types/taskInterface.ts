
export interface taskInterface{
    text: string;
    status: boolean;
    isEditing?: boolean;
    handleChangeText?: (() => void);
    handleChangeStatus?: (() => void);
    handleDelete?: (() => void);
    handleEdit?: (() => void);
    id: string;

}