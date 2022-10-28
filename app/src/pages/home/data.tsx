import { ButtonCustom } from "../../components/ButtonCustom/ButtonCustom";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { ConstainerButtons } from "./Home.styled";

export const columns = (handleClickEdit: { (id: number): void; }, handleClickDelete: { (id: number): void; }) => [
  {
    id: 'id',
    name: 'id',
    width: '100px',
    selector: (row: { id: number }) => row.id,
    sortable: false,
  },
  {
    id: 'name',
    name: 'name',
    selector: () => '',
    cell: (row: { first: string; last: string; }) => `${row.first} ${row.last}`,
    sortable: false,
  },
  {
    id: 'email',
    name: 'email',
    selector: (row: { email: string }) => row.email,
    sortable: false,
  },
  {
    id: 'company',
    name: 'company',
    selector: (row: { company: string }) => row.company,
    sortable: false,
  },
  {
    id: 'country',
    name: 'country',
    selector: (row: { country: string }) => row.country,
    sortable: false,
  },
  {
    id: 'action',
    name: '',
    selector: () => '',
    cell: (row: { id: number; }) => 
      <ConstainerButtons>
        <ButtonCustom background="green" icon={<AiOutlineEdit/>} onClick={()=> handleClickEdit(row.id)}/>
        <ButtonCustom background="red" icon={<AiOutlineDelete/>} onClick={()=> handleClickDelete(row.id)}/>

      </ConstainerButtons>,
    sortable: false,
  },
]