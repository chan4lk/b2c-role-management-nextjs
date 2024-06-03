
import { signIn } from "@/auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("azure-ad-b2c")
      }}
    >
      <button type="submit">Signin</button>
    </form>
  )
} 