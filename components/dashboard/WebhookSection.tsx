import React from "react";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { WebhookForm } from "./WebhookForm";

const WebhookSection = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Webhook Settings</h2>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Delivery Webhook</CardTitle>
          <CardDescription>
            Responses from the people you&apos;ve contacted will be sent to this
            URL.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <WebhookForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default WebhookSection;
