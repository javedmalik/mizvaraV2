"use client";
import {createContext,useContext,useEffect,useState,type ReactNode} from "react";
import {hindi} from "@/lib/hindi-dictionary";
type Language = "en" | "hi";
const LanguageContext=createContext<{language:Language;setLanguage:(v:Language)=>void}>({language:"en",setLanguage:()=>{}});
export function LanguageProvider({children}:{children:ReactNode}){
 const [language,setLanguage]=useState<Language>("en");
 useEffect(()=>{try{if(localStorage.getItem("mizavara-language")==="hi")setLanguage("hi");}catch{}},[]);
 useEffect(()=>{document.documentElement.lang=language;},[language]);
 function choose(v:Language){setLanguage(v);try{localStorage.setItem("mizavara-language",v);}catch{}}
 return <LanguageContext.Provider value={{language,setLanguage:choose}}>{children}</LanguageContext.Provider>;
}
export function useLanguage(){return useContext(LanguageContext);}
export function useTranslate(){ const {language}=useLanguage(); return (text:string)=>language==="hi"?(hindi[text]??text):text; }
export function T({text}:{text:string}){const {language}=useLanguage();return <>{language==="hi"?(hindi[text]??text):text}</>;}
export function LanguageSwitch(){const {language,setLanguage}=useLanguage();return <span className="language-switch" role="group" aria-label="Language / भाषा"><button type="button" lang="en" aria-pressed={language==="en"} onClick={()=>setLanguage("en")}>EN</button><span aria-hidden="true">|</span><button type="button" lang="hi" aria-pressed={language==="hi"} onClick={()=>setLanguage("hi")}>हिन्दी</button></span>;}
