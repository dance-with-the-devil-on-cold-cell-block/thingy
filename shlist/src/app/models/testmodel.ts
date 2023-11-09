import { RowDataPacket } from "mysql2"

export default interface Tutorial extends RowDataPacket {
  username?: string;
  email?: string;
  passwd?: string;
  joindate?: Date;
}

