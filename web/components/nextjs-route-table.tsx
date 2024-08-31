"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useRouter } from "next/navigation"

export function NextjsRouteTable() {
	const router = useRouter()
	// TODO: fetch automatically from existing routes in next.js (read FS, pass it to client component)
	const routes = [{ route: "/ton", description: "How to use Ton libraries to get wallet, make transactions, etc." }]

	return (
		<div className="container mx-auto py-10">
			<h2 className="text-2xl font-bold mb-4">Routes</h2>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[200px]">Route</TableHead>
						<TableHead>Description</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{routes.map((route, index) => (
						<TableRow key={index} className="cursor-pointer hover:bg-gray-100" onClick={() => router.push(route.route)}>
							<TableCell className="font-mono">{route.route}</TableCell>
							<TableCell>{route.description}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	)
}
