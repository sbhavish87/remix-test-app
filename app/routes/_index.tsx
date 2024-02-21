import type { MetaFunction } from "@remix-run/node";
import { json, useFetcher } from "@remix-run/react";
import { useEffect, useState, useTransition } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  const id = formData.get("title");
  console.log(id)
  await new Promise(r =>  setTimeout(r, 5000));
  return json({ ok: false });
}

export default function Index() {
  const fetcher = useFetcher();
  const isCreatingNewPost = fetcher.state === "submitting";

  useEffect(()=>{
    console.log(
    "fetcher state (is submidfat)"+ isCreatingNewPost
  )
  },[isCreatingNewPost])
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
        <fetcher.Form method="post">
          <input type="text" name="title" />
          <button type="submit">{isCreatingNewPost? `loading` :`Create` }</button>
        </fetcher.Form>
        
    </div>
  );
}
