import { Company } from "@/models/company"
import { Address } from "@/models/address"

export default interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
