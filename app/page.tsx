import { UserRow } from "@/components/UserRow";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/users');
  const users: { data: Array<{name: string, email: string, role: string}> } = await res.json();
  return (
    <div className="text-gray-900 bg-gray-200">
      <div className="p-4 flex">
        <h1 className="text-3xl">Users</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <table className="w-full text-md bg-white shadow-md rounded mb-4">
          <tbody>
            <tr className="border-b">
              <th className="text-left p-3 px-5">Name</th>
              <th className="text-left p-3 px-5">Email</th>
              <th className="text-left p-3 px-5">Role</th>
              <th></th>
            </tr>
            {users.data.map(user => <UserRow key={user.email} {...user} />)}
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
