"use client";

import { Button } from "@/components/ui/button";
import { exportDashboardToExcel } from "@/helpers/export-to-excel";
import { FileSpreadsheet } from "lucide-react";

interface ExportButtonProps {
  data: {
    totalRevenue: number | null;
    totalAppointments: number;
    totalPatients: number;
    totalDoctors: number;
    topDoctors: {
      id: string;
      name: string;
      avatarImageUrl: string | null;
      specialty: string;
      appointments: number;
      revenue: number | null;
    }[];
    topSpecialties: {
      specialty: string;
      appointments: number;
    }[];
    todayAppointments: {
      date: Date;
      patient: {
        name: string;
      };
      doctor: {
        name: string;
        specialty: string;
      };
      appointmentPriceInCents: number;
    }[];
  };
  period: {
    from: string;
    to: string;
  };
}

export function ExportButton({ data, period }: ExportButtonProps) {
  const handleExport = () => {
    exportDashboardToExcel({
      ...data,
      period,
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="mb-2 gap-2 bg-blue-500 p-4 text-white"
      onClick={handleExport}
    >
      <FileSpreadsheet className="h-4 w-4" />
      Exportar Relatório
    </Button>
  );
}
