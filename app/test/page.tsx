import { randomBytes } from "crypto";
import React from "react";
import bcrypt from 'bcrypt';
const page = () => {
  function generateSecureApiKey(apiKey: string): { hashedApiKey: string; apiKey: string } {
    const hashedApiKey = bcrypt.hashSync(apiKey, 12);
    return { hashedApiKey, apiKey };
  }
  const { hashedApiKey, apiKey } = generateSecureApiKey("2930db67489f0227754af62d0e3d208ffe9a2bbfbc21daad4e1fcb36b3633fc2");
  console.log(hashedApiKey);
  
  return <div>{hashedApiKey}</div>;
};

export default page;
