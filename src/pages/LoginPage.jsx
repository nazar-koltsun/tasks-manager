import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/Card";
import Logo from "../assets/images/logo.svg";
import UserIcon from "../assets/images/user-icon.svg";
import FormLabel from "../components/FormLabel";
import FormInput from "../components/FormInput";
import Button from "../components/Button";
import { useAuth } from "../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();

  const loginAsAdmin = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(loginAsAdmin.current.checked);
    navigate("/");
  }

  return (
    <div className="h-screen box-border p-4 relative"> 
      <div className="flex flex-col items-center gap-[85px] max-768:gap-[40px] w-[320px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-10vh]">
        <img src={Logo} width={97} height={27} alt="Logo" />

        <Card className='flex flex-col items-center w-full'>
          <img src={UserIcon} width={40} height={40} alt="User icon" />
          <h1 className="w-full mt-8 font-nunito font-semibold text-[22px] text-[var(--arsenic)]">Zaloguj się</h1>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-full mt-3">
            <div>
              <FormLabel htmlFor="name">Nazwa użytkownika / E-mail</FormLabel>
              <FormInput id="name" type="text" name="name" placeholder="Uzupełnij" required />
            </div>
            <div>
              <FormLabel htmlFor="password">Hasło</FormLabel>
              <FormInput id="password" type="password" name="password" placeholder="Uzupełnij" required />
            </div>

            {/* TODO: Remove after testing admin login */}
            <div className="flex gap-2 items-center">
              <FormLabel className="mb-0" htmlFor="login-as-admin">Login as admin</FormLabel>
              <input ref={loginAsAdmin} type="checkbox" id="login-as-admin" />
            </div>

            <Button className="mt-[50px] self-center" variant="default" type="submit">Zaloguj się</Button>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage;