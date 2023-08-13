import { signOut } from "next-auth/react";

const Logout = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); // Perform logout without redirection
    router.push("/admin"); // Redirect to login page
  };

  return (
    <div>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default Logout;