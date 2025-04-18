import HeroSection from "@/components/hero";
import Introduction from "@/components/introduction";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData, howItWorksData, statsData } from "@/data/landing";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-40">
        <HeroSection />

        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((statsData, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    {statsData.value}
                  </div>
                  <div className="text-gray-600">{statsData.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Todo lo que necesitas para gestionar tus finanzas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresData.map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="space-y-4 pt-4">
                    {feature.icon}
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-purple-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">
              ¿ Cómo funciona YaFue ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksData.map((step, index) => (
                // <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-purple-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Listo para Empezar a Tomar el Control de Tus Finanzas?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Únete a miles de usuarios que ya gestionan sus finanzas de forma
              más inteligente con YaFue
            </p>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 animate-bounce"
              >
                Comienza YA
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
