import { useSession, signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import "../Design/Gbtn.css";
import { FcGoogle } from "react-icons/fc";
export default function Login({ data }) {
  const { data: session } = useSession();

  if (session) {
    let Token = session.idToken;
    let Gdar = { mygen: data.Igender, yourgen: data.wgender };
    (async () => {
      let url = `http://localhost:3300/api/user/comewith/new`;
      let res = await fetch(url, {
        method: "post",
        body: JSON.stringify({ Geander: Gdar, Gaccount: true }),
        headers: { "Content-type": "application/json", Token },
      });
      let result = await res.json();
      if (result) {
        localStorage.setItem("Info", JSON.stringify(result.info));
        localStorage.setItem("Token", JSON.stringify(result.Token));
        console.log(result);

        redirect("/");
      }
    })();
  }
  const SignInNow = () => {
    if (data.Igender && data.wgender) {
      signIn("google");
    } else {
      alert("Gender seeking are require !");
    }
  };

  return (
    <>
      <div className="Gbtn" onClick={SignInNow}>
        <div className="GIcon">
          <FcGoogle />
        </div>
        <div className="Text">Sign in with Google</div>
      </div>
    </>
  );
}
