import { UserRow } from "@/components/UserRow";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/users');
  const users: { data: Array<{fullname: string, email: string, role: string}> } = await res.json();
  return (
    <div className="text-gray-900 bg-gray-200 h-screen">
      <div className="p-4 flex">
        <h1 className="text-3xl">Users</h1>
      </div>
      <div className="px-3 py-4 flex justify-center">
        <div className="w-full text-md bg-white shadow-md rounded mb-4">
          <div className="">
            <div className="border-b grid grid-cols-4 gap-4">
              <div className="text-left p-3 px-5">Email</div>
              <div className="text-left p-3 px-5">Name</div>
              <div className="text-left p-3 px-5">Role</div>
              <div></div>
            </div>
            {users.data.map(user => <UserRow key={user.email} {...user} />)}
            
          </div>
        </div>
      </div>
    </div>
  );
}
