import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ClinicForm from "./_components/form";
const ClinicFormPage = () => {
  return (
    <div>
      <Dialog open={true}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Adicione uma clínica</DialogTitle>
            <DialogDescription>
              Preencha o formulário abaixo para adicionar uma clínica.
            </DialogDescription>
          </DialogHeader>
          <ClinicForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClinicFormPage;
