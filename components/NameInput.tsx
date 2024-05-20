import { UserRowProps } from "./UserRowProps";

export const NameInput = (user: UserRowProps) => (
  <input
    type="text"
    value={user.name}
    className="bg-transparent border-b-2 border-gray-300 py-2" />
);
