"use server";

import { db } from "@/db";
import { upsertDoctorSchema } from "./schema";
import { doctorsTable } from "@/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { actionClient } from "@/lib/next-safe-action";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { revalidatePath } from "next/cache";

dayjs.extend(utc);
dayjs.extend(timezone);

export const upsertDoctor = actionClient
  .schema(upsertDoctorSchema)
  .action(async ({ parsedInput }) => {
    const availableFromTime = parsedInput.availableFromTime;
    const availableToTime = parsedInput.availableToTime;

    // Aqui não precisamos converter para UTC pois são apenas horários
    const availableFromTimeFormatted = availableFromTime;
    const availableToTimeFormatted = availableToTime;

    const session = await auth.api.getSession({
      headers: await headers(),
    });
    if (!session?.user) {
      throw new Error("Unauthorized");
    }

    if (!session?.user.clinic?.id) {
      throw new Error("Clinic not found");
    }

    await db
      .insert(doctorsTable)
      .values({
        ...parsedInput,
        id: parsedInput.id,
        clinicId: session?.user.clinic?.id,
        availableFromTime: availableFromTimeFormatted,
        availableToTime: availableToTimeFormatted,
      })
      .onConflictDoUpdate({
        target: [doctorsTable.id],
        set: {
          ...parsedInput,
          availableFromTime: availableFromTimeFormatted,
          availableToTime: availableToTimeFormatted,
        },
      });
    revalidatePath("/doctors");
  });
