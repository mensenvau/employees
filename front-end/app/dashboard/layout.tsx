"use client"

import { Menu } from "@/components/menu";
import { Sidebar } from "@/components/sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
    const pathname = usePathname()
    let path = pathname.replace("/dashboard/", "").split("/")[0]

    return (
        <>
            <div className="md:block min-h-screen">
                <Menu />
                <div className="border-t bg-background  min-h-screen">
                    <div className="grid lg:grid-cols-6 min-h-screen">
                        <Sidebar path={path} className="hidden lg:block" />
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
