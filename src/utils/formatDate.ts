import { format } from "date-fns";
import { ptBR } from 'date-fns/locale'

const formatDate = (date: Date): string =>
    format(new Date(date), "dd/MM/yyyy", { locale: ptBR });

export default formatDate;