
import { Button } from "@/registry/ui/button";
import { DashboardIcon, PersonIcon, RowsIcon, StackIcon } from "@radix-ui/react-icons";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getRequest } from "@/lib/request";
import Link from "next/link";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  path: string;
}

let data = [{
  name: "Basic",
  menu: [{
    name: "Dashboard",
    path: "",
    icon: <DashboardIcon className="mr-2" />
  }, {
    name: "Xodimlar",
    path: "employees",
    icon: <PersonIcon className="mr-2" />
  }, {
    name: "Bo'limlar",
    path: "branchs",
    icon: <RowsIcon className="mr-2" />
  },
  ]
},
  // {
  //   name: "Settings",
  //   menu: [{
  //     name: "Default",
  //     path: "default",
  //     icon: <RowsIcon className="mr-2" />
  //   }]
  // }
]

export function Sidebar({ path }: SidebarProps) {

  let router = useRouter();
  let authAccess = async () => {
    let res = (await getRequest("auth"))
    if (res && res?.status == 405) router.push("/")
  }

  useEffect(() => { authAccess(); }, [])

  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        {data.map((item) => (
          <div className="px-3 py-2" key={item.name}>
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight"> {item.name} </h2>
            <div className="space-y-1">
              {item.menu.map((it) => (
                <Link href={`/dashboard/${it.path}`} key={it.name}>
                  <Button variant={it.path == path ? "secondary" : "ghost"} className="w-full justify-start"> {it.icon} {it.name}</Button>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
