export interface AddressSchema {
  rua: string;
  número: number | '';
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}
