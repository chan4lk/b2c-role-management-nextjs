import { RoleDropdown } from "./RoleDropdown";
import { NameInput } from "./NameInput";
import { EmailInput } from "./EmailInput";
import { SaveButton } from "./SaveButton";
import { DeleteButton } from "./DeleteButton";
import { UserRowProps } from "./UserRowProps";
export const UserRow = (user: UserRowProps) => (
  <tr className="border-b hover:bg-orange-100 bg-gray-100">
    <td className="p-3 px-5">
      <NameInput {...user} />
    </td>
    <td className="p-3 px-5">
      <EmailInput {...user}/>
    </td>
    <td className="p-3 px-5">
      <RoleDropdown {...user} />
    </td>
    <td className="p-3 px-5 flex justify-end">
      <SaveButton />
      <DeleteButton />
    </td>
  </tr>
);
