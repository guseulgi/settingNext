"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex flex-col items-center my-5 md:w-8/12 mx-auto">
      <h2 className="mx-auto text-2xl my-7">Login, play with me!</h2>

      <form className="flex flex-col gap-2 mb-2 w-1/2">
        <div className="block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email1"
          type="email"
          placeholder="email@xxxxx.com"
          required
        />

        <div className="block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput id="password1" type="password" required />

        <div className="flex items-center gap-2 mb-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" color="blue">
          Login
        </Button>
      </form>

      <div className="w-1/2 flex text-xs justify-around ">
        <div className="hover:font-bold">
          <Link href="/signin">Register</Link>
        </div>
        <div className="hover:font-bold">
          <Link href="/findpw">Find password</Link>
        </div>
      </div>
    </main>
  );
}
