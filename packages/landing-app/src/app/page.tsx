import AccountHome from "@/app/components/pages/AccountHome/AccountHome";
import { MENU_ITEMS } from "@/constants/menuItems";
import { FAccountButtonActions } from "components";
import { redirect } from "next/navigation";

export default async function HomeView() {
  const menuItems = MENU_ITEMS.map((item) => ({
    ...item,
    current: false,
  }));

  const actionsHome: FAccountButtonActions = {
    handleNewAccount: async () => {
      "use server";
      redirect("/dashboard");
    },
    handleLogin: async () => {
      "use server";
      redirect("/dashboard");
    },
  };

  return <AccountHome actions={actionsHome} menuItems={menuItems} />;
}
