import { ReactNode } from "react"
import LangProvider from "~/provider"

export default async function Page({children, params }: { params: Promise<{ lang: string }>,children:ReactNode }) {
  const { lang } = await params
  return <LangProvider lang={lang}>
    {children}
  </LangProvider>
}

// Correctly define the static params for type inference
export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'in' }];
}
