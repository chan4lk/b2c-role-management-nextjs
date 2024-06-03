import { SignIn } from "@/components/SignIn";
import { UserRow } from "@/components/UserRow";

export default async function Home() {
  const res = await fetch('http://localhost:3000/api/users');
  const users: { data: Array<User> } = await res.json();
  return (
    <div className="text-gray-900 bg-gray-200 h-screen">
      <div className="p-4 grid grid-cols-2 gap-4">
        <h1 className="text-3xl">Users</h1>
        <SignIn />
      </div>
      <div className="px-3 py-4 flex justify-center">
        <div className="w-full text-md bg-white shadow-md rounded mb-4">
          <div className="">
            <div className="border-b grid grid-cols-5 gap-4">
              <div className="text-left p-3 px-5 col-span-2">Email</div>
              <div className="text-left p-3 px-5">Name</div>
              <div className="text-left p-3 px-5">Role</div>
              <div></div>
            </div>
            {users.data.map(user => <UserRow key={user.id} {...user} />)}
            
          </div>
        </div>
      </div>
    </div>
  );
}
