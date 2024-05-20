import { UserRowProps } from "./UserRowProps";

export const EmailInput = (user: UserRowProps) => (
  <input
    type="text"
    value={user.email}
    className="bg-transparent border-b-2 border-gray-300 py-2" />
);
