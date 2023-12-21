"use client"

import { downloadRequest } from "@/lib/request";

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
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between">
                <p className="text-sm">Bu sahifa hali bo'sh. kelajakda qo'llanma yozilishi kutilmoqda.</p>
                <button onClick={handleDownload}>Download XLSX</button>
            </div>
        </div>
    )
}
