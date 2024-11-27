"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useContext } from "react"
import { langData } from "~/config/lang"

const ctx = createContext<{lang:string}>({lang:'en'})
const LangProvider = ({ children, lang }: {children:ReactNode,lang:string}) => {
  return <ctx.Provider value={{lang}}>{children}</ctx.Provider>
}

export const useLanguage = () => {
  const { lang } = useContext(ctx)

  const d = (langData as any)[lang] as any

  return {
    getData: (k:string) => d[k],
  }
}

export default LangProvider
