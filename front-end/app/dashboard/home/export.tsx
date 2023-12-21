"use client"

import { downloadRequest } from "@/lib/request";
import { Button } from "@/registry/ui/button";

export function ExportTab() {
    const handleDownload = async () => {
        try {
            const response = await downloadRequest(`download/all_employees`);
            const blob = await response.blob();
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = 'barcha_xodimlar.xlsx';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <div>
                    <p>Shakilangan ma'lumotni ma'lum bir shakilda excel fayilda yuklab olish:</p>
                    <Button onClick={handleDownload} className="m-2"> Barcha xodilarni yuklab olish(XLSX)</Button>
                </div>
            </div>
        </div>
    )
}
