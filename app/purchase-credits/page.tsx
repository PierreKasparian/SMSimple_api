import { createClient } from "@/utils/supabase/server";
import React from "react";
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Zap } from "lucide-react"
import NavBar from "@/components/Navbar"
import BuyButton from "@/components/BuyButton"
import { redirect } from "next/navigation";
const page = async () => {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  if (!user.data.user?.id) {
    redirect("/login");
  }
console.log('caca',process.env.SITE_URL)
  return (
    <div className="flex flex-col min-h-screen">
    <NavBar />

    <main className="flex-1">
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Achetez des Crédits SMS</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choisissez le forfait qui correspond à vos besoins d&apos;envoi de SMS
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {/* Plan 1: 50 crédits */}
            <Card
              className={`flex flex-col`}
            >
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Débutant</CardTitle>
                <CardDescription>Idéal pour tester notre service</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">1€</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold text-center mb-4">50 crédits</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>1 crédit = 1 SMS</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Validité: 3 mois</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Support par email</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
               <BuyButton user_id={user.data.user?.id}/>
              </CardFooter>
            </Card>

            {/* Plan 2: 1000 crédits */}
            <Card className={`flex flex-col`}>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Professionnel</CardTitle>
                <CardDescription>Pour les entreprises en croissance</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">15€</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold text-center mb-4">1000 crédits</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>1 crédit = 1 SMS</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Validité: 6 mois</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Support prioritaire</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Rapports de livraison</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <BuyButton user_id={user.data.user?.id}/>
              </CardFooter>
            </Card>

            {/* Plan 3: 5000 crédits */}
            <Card
              className={`flex flex-col`}
            >
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Entreprise</CardTitle>
                <CardDescription>Pour les communications à grande échelle</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">50€</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold text-center mb-4">5000 crédits</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>1 crédit = 1 SMS</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Validité: 12 mois</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Support dédié</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Rapports avancés</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>API prioritaire</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <BuyButton user_id={user.data.user?.id}/>
              </CardFooter>
            </Card>
          </div>

          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              Besoin d&apos;un forfait personnalisé ?{" "}
              <Link href="mailto:ia.school.app@gmail.com" className="text-primary font-medium hover:underline">
                Contactez notre équipe commerciale
              </Link>
            </p>
          </div>
      </section>
    </main>
  </div>

  );
};

export default page;
