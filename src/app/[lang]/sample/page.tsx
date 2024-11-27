"use client"

import { useLanguage } from "~/provider"

export default function Page() {
  const {getData} = useLanguage()
  return <div>
    {getData("sample")}
  </div>
}

