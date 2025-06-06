"use client";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import UpsertDoctorForm from "./upsert-doctor-form";
import { useState } from "react";
const AddDoctorButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-2">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button>
            <Plus />
            Novo Médico
          </Button>
        </DialogTrigger>
        <UpsertDoctorForm onSuccess={() => setIsOpen(false)} />
      </Dialog>
    </div>
  );
};

export default AddDoctorButton;
