/* eslint-disable @next/next/no-img-element */
"use client"
import { languageTag, onSetLanguageTag } from "@/paraglide/runtime"
import { useAuth } from "@clerk/nextjs"
import { useEffect, useState } from "react"

export default function HomeRoute(props: { email?: string }) {
	const { isSignedIn } = useAuth()
	const [currentLanguage, setCurrentLanguage] = useState(languageTag())

	useEffect(() => {
		const unsubscribe = onSetLanguageTag(newLanguageTag => {
			setTimeout(() => {
				setCurrentLanguage(newLanguageTag)
			}, 0)
		})
		return () => unsubscribe
	}, [])

	return (
		<>
			<div>Home</div>
		</>
	)
}
