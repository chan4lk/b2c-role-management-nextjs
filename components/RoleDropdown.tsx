import { UserRowProps } from "./UserRowProps";

export const RoleDropdown = (user: UserRowProps) => (
  <select
    value={user.role}
    className="bg-transparent border-b-2 border-gray-300 py-2"
  >
    <option value="user">user</option>
    <option value="admin">admin</option>
  </select>
);
