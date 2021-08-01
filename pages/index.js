import { useAuth } from '../lib/auth'
export default function Index() {
  const auth = useAuth()
  
  return 
    <>
    <p>{process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}</p>
  auth.user ? (
    <div>
      
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
  )
  </>
}