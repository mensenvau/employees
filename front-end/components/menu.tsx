import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger, } from "@/registry/ui/menubar";
import { useRouter } from "next/navigation";

export function Menu() {
  const router = useRouter()
  let logOut = async () => {
    localStorage.setItem("token", ""); router.push("/");
  }

  return (
    <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
        <MenubarTrigger className="font-bold">Settings</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>User</MenubarItem>
          <MenubarSeparator />
          <MenubarItem> Help </MenubarItem>
          <MenubarItem onClick={logOut} >Log Out </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
