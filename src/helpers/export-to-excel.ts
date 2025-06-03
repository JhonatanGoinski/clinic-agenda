import dayjs from "dayjs";
import * as XLSX from "xlsx";
import { formatCurrencyInCents } from "./currency";

interface ExportData {
  totalRevenue: number | null;
  totalAppointments: number;
  totalPatients: number;
  totalDoctors: number;
  topDoctors: {
    name: string;
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
  period: {
    from: string;
    to: string;
  };
}

export const exportDashboardToExcel = (data: ExportData) => {
  // Criar as planilhas
  const workbook = XLSX.utils.book_new();

  // Resumo
  const summaryData = [
    ["Relatório do Dashboard"],
    [
      "Período",
      `${dayjs(data.period.from).format("DD/MM/YYYY")} a ${dayjs(data.period.to).format("DD/MM/YYYY")}`,
    ],
    [""],
    ["Indicadores Gerais"],
    ["Faturamento Total", formatCurrencyInCents(data.totalRevenue || 0)],
    ["Total de Agendamentos", data.totalAppointments],
    ["Total de Pacientes", data.totalPatients],
    ["Total de Médicos", data.totalDoctors],
  ];
  const summarySheet = XLSX.utils.aoa_to_sheet(summaryData);
  XLSX.utils.book_append_sheet(workbook, summarySheet, "Resumo");

  // Top Médicos
  const doctorsData = [
    ["Top Médicos"],
    ["Nome", "Especialidade", "Agendamentos", "Faturamento"],
    ...data.topDoctors.map((doctor) => [
      doctor.name,
      doctor.specialty,
      doctor.appointments,
      doctor.revenue ? formatCurrencyInCents(doctor.revenue) : "R$ 0,00",
    ]),
  ];
  const doctorsSheet = XLSX.utils.aoa_to_sheet(doctorsData);
  XLSX.utils.book_append_sheet(workbook, doctorsSheet, "Top Médicos");

  // Top Especialidades
  const specialtiesData = [
    ["Top Especialidades"],
    ["Especialidade", "Agendamentos"],
    ...data.topSpecialties.map((specialty) => [
      specialty.specialty,
      specialty.appointments,
    ]),
  ];
  const specialtiesSheet = XLSX.utils.aoa_to_sheet(specialtiesData);
  XLSX.utils.book_append_sheet(
    workbook,
    specialtiesSheet,
    "Top Especialidades",
  );

  // Agendamentos do Dia
  const appointmentsData = [
    ["Agendamentos do Dia"],
    ["Data/Hora", "Paciente", "Médico", "Especialidade", "Valor"],
    ...data.todayAppointments.map((appointment) => [
      dayjs(appointment.date).format("DD/MM/YYYY HH:mm"),
      appointment.patient.name,
      appointment.doctor.name,
      appointment.doctor.specialty,
      formatCurrencyInCents(appointment.appointmentPriceInCents),
    ]),
  ];
  const appointmentsSheet = XLSX.utils.aoa_to_sheet(appointmentsData);
  XLSX.utils.book_append_sheet(workbook, appointmentsSheet, "Agendamentos");

  // Gerar o arquivo
  const fileName = `dashboard-${dayjs().format("YYYY-MM-DD-HH-mm")}.xlsx`;
  XLSX.writeFile(workbook, fileName);
};
