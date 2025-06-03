import { Stethoscope } from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { formatCurrencyInCents } from "@/helpers/currency";

interface TopDoctorsProps {
  doctors: {
    id: string;
    name: string;
    avatarImageUrl: string | null;
    specialty: string;
    appointments: number;
    revenue: number | null;
  }[];
}

export default function TopDoctors({ doctors }: TopDoctorsProps) {
  return (
    <Card className="mx-auto w-full">
      <CardContent>
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Stethoscope className="text-muted-foreground" />
            <CardTitle className="text-base">Top Médicos</CardTitle>
          </div>
        </div>

        {/* Doctors List */}
        <div className="space-y-6">
          {doctors.map((doctor) => {
            const doctorInitial = doctor.name
              .split(" ")
              .map((name) => name[0])
              .join("");

            return (
              <div key={doctor.id} className="flex items-center gap-4">
                <Avatar className="h-10 w-10">
                  {doctor.avatarImageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={doctor.avatarImageUrl}
                      alt={doctor.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <AvatarFallback>{doctorInitial}</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium">{doctor.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        {doctor.specialty}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {doctor.appointments} agend.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {formatCurrencyInCents(doctor.revenue || 0)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
