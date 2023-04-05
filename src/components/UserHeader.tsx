import { cn } from "@/utils"

function Avatar({ src, className }: { src: string; className?: string }) {
	return (
		<div className={cn("w-8 h-8 rounded-full overflow-hidden", className)}>
			<img src={src} alt="" />
		</div>
	)
}

export default function UserHeader() {
	return (
		<div className="flex items-center w-full bg-white shadow">
			<div className="grow"></div>
			<div className="flex items-center mr-8">
				<Avatar
					src="https://avatars.githubusercontent.com/u/15936231?v=4"
					className="mr-2 my-3"
				/>
				<p className="text-sm text-gray-500">内测用户</p>
			</div>
		</div>
	)
}
