import { holter } from './holter.interface';
export interface usuarios {
  name?: string;
  mail?: string;
  password?: string;
  confirPassword?: string;
  holter_user?: holter[];
}
