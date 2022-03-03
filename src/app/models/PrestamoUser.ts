import { Usuario } from 'src/app/models/Usuario';
import { Prestamos } from './Prestamos';
export interface PrestamoUser{
  prestamo: Prestamos,
  usuario: Usuario
}
