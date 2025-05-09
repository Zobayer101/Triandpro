import { redirect } from "next/navigation";

const Accountcheck = (setModal) => {
  const data = JSON.parse(localStorage.getItem("Info"));
  const Token = JSON.parse(localStorage.getItem("Token"));
  if (!data || !Token) {
    localStorage.clear();
    redirect("/Signup");
  } else if (data.accountstatus == 0) {
    setModal(false);
  }
  return null;
};
export default Accountcheck;
