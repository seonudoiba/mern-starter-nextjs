
import Profiles from "../../components/Profiles";
import PrivateRoute from "../../auth_/auth/PrivateRoute";
import { useRouter } from 'next/router'


const UserPage = () => {
    const router = useRouter()
    const userId = router.query.userId
    console.log(userId)
    return (
        <PrivateRoute component={Profiles} />
        
    )
}

export default UserPage

<AppBar position="static">
      <Toolbar>

          <IconButton  href="/" aria-label="Home" onClick={() => setPath("/")} className={color}>
            <HomeIcon />
          </IconButton>
       
       
          <Button href="/users" onClick={() => setPath("/users")} className={color}>Users
          </Button>
     
        
        {
          !auth.isAuthenticated() && (
          <>
            
          <Button href="/signup" onClick={() => setPath("/signup")} className={color}>
            Sign up
          </Button>
        
        
          <Button href="/signin" onClick={() => setPath("/signin")} className={color}>
            Sign In
        </Button>
          </>)
            
        }
        
        {/* {
          (auth.isAuthenticated()) && (<span>
            <Link href={"/users/" + auth.isAuthenticated().user._id}>
              <Button onClick={() => setPath("/users/" + auth.isAuthenticated().user._id)} className={color}>My Profile</Button>
            </Link>
            <Button color="inherit" onClick={() => {
              auth.clearJWT(() => router.push('/'))
            }}>Signo ut</Button>
          </span>)
        } */}
      </Toolbar>
    </AppBar>
