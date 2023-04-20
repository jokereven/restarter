import AppearanceSwitch from "@/components/part/appearance-switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { albumAtom, incAndDecAtom, photosAtom } from "@/state/demo"
import { useAtom } from "jotai"
import { Suspense } from "react"

function Controller() {
	const [id, setId] = useAtom(incAndDecAtom)
	return (
		<div className="flex items-center gap-2">
			<button onClick={() => setId("dec")}>
				<div className="i-carbon-arrow-left"></div>
			</button>
			<span>{id}</span>
			<button onClick={() => setId("inc")}>
				<div className="i-carbon-arrow-right"></div>
			</button>
		</div>
	)
}

function Photos() {
	const [photos] = useAtom(photosAtom)
	return (
		<div className="grid grid-cols-3 gap-6 max-w-3xl">
			{photos?.slice(0, 6).map((photo) => (
				<Card key={photo.id} className="h-[320px] w-[240px]">
					<CardHeader>
						<CardTitle>{photo.title}</CardTitle>
					</CardHeader>
					<CardContent>
						<img
							src={photo.thumbnailUrl}
							alt={photo.title}
							className="rounded-md overflow-clip"
						></img>
					</CardContent>
				</Card>
			))}
		</div>
	)
}

function AlbumInfo() {
	const [album] = useAtom(albumAtom)
	return <h1>{album?.title}</h1>
}

export default function App() {
	return (
		<div className="h-full overflow-auto flex flex-col gap-4 items-center justify-center font-mono">
			<Suspense fallback="loading...">
				<AlbumInfo />
			</Suspense>
			<Controller />
			<div>
				<Suspense
					fallback={
						<div className="grid grid-cols-3 gap-6 max-w-3xl">
							{Array.from({ length: 6 }).map((_, index) => (
								<Card key={index} className="h-[320px] w-[240px]">
									<CardHeader>
										<CardTitle>Loading...</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="rounded-md overflow-clip bg-card-foreground h-[150px] w-[150px] animate-pulse"></div>
									</CardContent>
								</Card>
							))}
						</div>
					}
				>
					<Photos />
				</Suspense>
			</div>
			<AppearanceSwitch />
		</div>
	)
}
