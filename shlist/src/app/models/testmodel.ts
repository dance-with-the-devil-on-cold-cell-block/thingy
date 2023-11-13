import { RowDataPacket } from "mysql2"

export default interface Sususer  extends RowDataPacket {
  username?: string;
  email?: string;
  passwd?: string;
  joindate?: Date;
}

