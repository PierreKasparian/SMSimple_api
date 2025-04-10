import { createClient } from "@/utils/supabase/server";
import React from "react";
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Zap } from "lucide-react"
import {NavBar} from "@/components/dashboard/Navbar"
import BuyButton from "@/components/BuyButton"
import { redirect } from "next/navigation";
const page = async () => {
  const supabase = await createClient();
  const user = await supabase.auth.getUser();
  if (!user.data.user?.id) {
    redirect("/login");
  }
  return (
    <div className="flex flex-col min-h-screen">
    <NavBar />

    <main className="flex-1">
      <section className="w-full py-12 md:py-24">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Purchase SMS Credits</h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the plan that best suits your SMS sending needs
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
                <CardTitle className="text-xl">Starter</CardTitle>
                <CardDescription>Perfect for testing our service</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">2€</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold text-center mb-4">50 credits</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>1 credit = 1 SMS</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Validity: forever</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Webhooks</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
               <BuyButton user_id={user.data.user?.id} credits={2}/>
              </CardFooter>
            </Card>

            {/* Plan 2: 1000 crédits */}
            <Card className={`flex flex-col`}>
              <CardHeader>
                <Sparkles className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Professional</CardTitle>
                <CardDescription>For growing businesses</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">20€</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold text-center mb-4">1000 credits</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>1 credit = 1 SMS</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Validity: forever</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Email support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Webhooks</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <BuyButton user_id={user.data.user?.id} credits={20}/>
              </CardFooter>
            </Card>

            {/* Plan 3: 5000 crédits */}
            <Card
              className={`flex flex-col`}
            >
              <CardHeader>
                <Zap className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <CardDescription>For large-scale communications</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">60€</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-2xl font-bold text-center mb-4">5000 credits</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>1 credit = 1 SMS</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Validity: forever</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Advanced email support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 mr-2 text-primary" />
                    <span>Webhooks</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <BuyButton user_id={user.data.user?.id} credits={60}/>
              </CardFooter>
            </Card>
          </div>

          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500">
              Need a custom plan?{" "}
              <Link href="mailto:ia.school.app@gmail.com" className="text-primary font-medium hover:underline">
                Contact our sales team
              </Link>
            </p>
          </div>
      </section>
    </main>
  </div>

  );
};

export default page;
