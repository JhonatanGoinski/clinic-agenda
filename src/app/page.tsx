import {
  ArrowRight,
  Calendar,
  BarChart3,
  Users,
  Shield,
  Clock,
  Star,
  LogIn,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-600 to-green-600"></div>
            <span className="text-xl font-bold text-gray-900">
              Clinic<span className="text-blue-600">Agenda</span>
            </span>
          </div>
          <Link href="/authentication">
            <Button variant="outline" className="hidden sm:flex">
              <LogIn />
              Entrar
            </Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-20">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-green-600">
            <Calendar className="h-8 w-8 text-white" />
          </div>

          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Gerencie sua clínica com
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {" "}
              eficiência total
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
            A plataforma completa para gestão de clínicas médicas. Agendamentos,
            pacientes, relatórios e muito mais em um só lugar.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/authentication">
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-green-600 px-8 py-4 text-lg font-semibold hover:from-blue-700 hover:to-green-700 sm:w-auto"
              >
                Acessar Plataforma
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span>Avaliado por mais de 1.000+ clínicas</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
            Tudo que sua clínica precisa
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Ferramentas poderosas para otimizar sua gestão e melhorar o
            atendimento aos pacientes
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="group border-0 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-600 group-hover:text-white">
                <Calendar className="h-6 w-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Agendamentos
              </h3>
              <p className="text-gray-600">
                Sistema completo de agendamentos com calendário intuitivo e
                notificações automáticas
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 group-hover:bg-green-600">
                <BarChart3 className="h-6 w-6 text-green-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Relatórios
              </h3>
              <p className="text-gray-600">
                Dashboards completos com métricas de faturamento, agendamentos e
                performance
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 group-hover:bg-purple-600">
                <Users className="h-6 w-6 text-purple-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Pacientes
              </h3>
              <p className="text-gray-600">
                Gestão completa de pacientes com histórico médico e informações
                detalhadas
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 group-hover:bg-orange-600">
                <Shield className="h-6 w-6 text-orange-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Segurança
              </h3>
              <p className="text-gray-600">
                Dados protegidos com criptografia avançada e conformidade com
                LGPD
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 group-hover:bg-red-600">
                <Clock className="h-6 w-6 text-red-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Tempo Real
              </h3>
              <p className="text-gray-600">
                Atualizações em tempo real e sincronização automática entre
                dispositivos
              </p>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-white/50 backdrop-blur-sm transition-all hover:bg-white hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 group-hover:bg-teal-600">
                <Star className="h-6 w-6 text-teal-600 group-hover:text-white" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                Suporte
              </h3>
              <p className="text-gray-600">
                Suporte especializado 24/7 para garantir o melhor funcionamento
                da sua clínica
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 px-6 py-12 text-center text-white sm:px-12">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Pronto para transformar sua clínica?
          </h2>
          <p className="mb-8 text-lg opacity-90 sm:text-xl">
            Junte-se a milhares de profissionais que já confiam na nossa
            plataforma
          </p>
          <Link href="/authentication">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white px-8 py-4 text-lg font-semibold text-blue-600 hover:bg-gray-100"
            >
              Fazer Login Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded bg-gradient-to-r from-blue-600 to-green-600"></div>
              <span className="font-semibold text-gray-900">ClinicAgenda</span>
            </div>
            <p className="text-sm text-gray-600">
              © 2024 ClinicAgenda. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
