import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import LoginForm from "./components/login-form";
import SignUpForm from "./components/sign-up-form";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { ArrowLeft, Calendar, Shield, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header com botão voltar */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Voltar</span>
          </Button>
        </Link>
      </div>

      {/* Logo no topo */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 sm:top-8">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-green-600"></div>
          <span className="text-xl font-bold text-gray-900">
            Clinic<span className="text-blue-600">Agenda</span>
          </span>
        </Link>
      </div>

      <div className="flex min-h-screen">
        {/* Lado esquerdo - Informações (oculto em mobile) */}
        <div className="hidden w-1/2 flex-col justify-center bg-gradient-to-br from-blue-600 to-green-600 p-12 text-white lg:flex">
          <div className="max-w-md">
            <h1 className="mb-6 text-4xl font-bold">Bem-vindo de volta!</h1>
            <p className="mb-8 text-lg opacity-90">
              Acesse sua plataforma de gestão de clínicas e continue oferecendo
              o melhor atendimento aos seus pacientes.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Agendamentos Inteligentes</h3>
                  <p className="text-sm opacity-80">
                    Gerencie consultas com facilidade
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Gestão de Pacientes</h3>
                  <p className="text-sm opacity-80">
                    Histórico completo e organizado
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/20">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Segurança Total</h3>
                  <p className="text-sm opacity-80">
                    Dados protegidos e conformidade LGPD
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lado direito - Formulário */}
        <div className="flex w-full items-center justify-center p-4 sm:p-8 lg:w-1/2">
          <div className="w-full max-w-md">
            <Card className="border-0 bg-white/80 shadow-xl backdrop-blur-sm">
              <CardHeader className="space-y-1 pb-6 text-center">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Acesse sua conta
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Entre com suas credenciais para acessar o painel
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 bg-gray-100">
                    <TabsTrigger
                      value="login"
                      className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                    >
                      Login
                    </TabsTrigger>
                    <TabsTrigger
                      value="register"
                      className="data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm"
                    >
                      Criar Conta
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="login" className="mt-6">
                    <LoginForm />
                  </TabsContent>

                  <TabsContent value="register" className="mt-6">
                    <SignUpForm />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Informações extras para mobile */}
            <div className="mt-6 text-center lg:hidden">
              <p className="text-sm text-gray-600">
                Plataforma confiável para gestão de clínicas médicas
              </p>
              <div className="mt-4 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span className="text-xs text-gray-600">Agendamentos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-xs text-gray-600">Pacientes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-purple-600" />
                  <span className="text-xs text-gray-600">Segurança</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticationPage;
