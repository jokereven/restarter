import AppearanceSwitch from "@/components/part/appearance-switch"
import LanguageSwitch from "@/components/part/language-switch"
import { Card, CardTitle, SelectedCard } from "@/components/ui/card"
import { incAndDecAtom, useAlbum, usePhotos } from "@/state/demo"
import { useAtom } from "jotai"
import { Fragment, Suspense } from "react"
import { useTranslation } from "react-i18next"

function Controller() {
	const [id, setId] = useAtom(incAndDecAtom)
	return (
		<div className="flex items-center gap-2">
			{id > 1 && (
				<button onClick={() => setId("dec")}>
					<div className="i-carbon-arrow-left"></div>
				</button>
			)}
			<span>{id}</span>
			{id < 10 && (
				<button onClick={() => setId("inc")}>
					<div className="i-carbon-arrow-right"></div>
				</button>
			)}
		</div>
	)
}

function Photos() {
	const { data: photos } = usePhotos()

	if (!photos) {
		return (
			<div className="grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
				{Array.from({ length: 9 }).map((_v, index) => {
					const uniqueId = `${index}`
					return (
						<Fragment key={uniqueId}>
							<Card id={uniqueId}>
								<CardTitle className="flex items-center gap-2">
									{"Loading... "}
									<div className="i-carbon-circle-dash animate-spin"></div>
								</CardTitle>
							</Card>
						</Fragment>
					)
				})}
			</div>
		)
	}

	const photoSet = photos
		.filter((photo, index) => {
			return (
				index ===
				photos.findIndex((obj) => {
					return obj.id === photo.id && obj.albumId === photo.albumId
				})
			)
		})
		.slice(0, 9)

	return (
		<div className="grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
			{photoSet.map((photo, index) => {
				const uniqueId = `${index}`
				return (
					<Fragment key={uniqueId}>
						<Card id={uniqueId}>
							<CardTitle>{photo.title}</CardTitle>
						</Card>
						<SelectedCard id={uniqueId} className="h-60 w-80">
							<img
								src={photo.thumbnailUrl}
								alt={photo.title}
								className="h-full w-full object-cover"
							></img>
						</SelectedCard>
					</Fragment>
				)
			})}
		</div>
	)
}

function AlbumInfo() {
	const { data: album } = useAlbum()
	return <h1>{album?.title}</h1>
}

export default function App() {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col items-center justify-center gap-4 p-4 font-mono">
			<h1>{t("hello-world")}</h1>
			<Suspense fallback="loading...">
				<AlbumInfo />
			</Suspense>
			<Controller />
			<Photos />
			<div className="flex items-center gap-4">
				<AppearanceSwitch />
				<LanguageSwitch />
			</div>
		</div>
	)
}
