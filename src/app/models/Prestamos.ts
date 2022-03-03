import { Usuario } from 'src/app/models/Usuario';
export interface Prestamos{
  id?: number,
  accepted: boolean,
  value: number,
  date: Date,
  idUser: number,
  nombreUsuario?: string,
  pagado?: boolean
}
