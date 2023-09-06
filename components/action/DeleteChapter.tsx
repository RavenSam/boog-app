import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Trash } from "lucide-react";

interface DeleteChapterDialogProps {
	open: boolean;
	onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
	chapterId: string;
}

interface DeleteChapterToastProps {
	chapterId: string;
}
export function DeleteChapterDialog({ open, onOpenChange }: DeleteChapterDialogProps) {
	return (
		<AlertDialog open={open} onOpenChange={onOpenChange}>
			<AlertDialogContent>
				<AlertDialogHeader>
					<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
					<AlertDialogDescription>
						This action cannot be undone. This will permanently delete
						your account and remove your data from our servers.
					</AlertDialogDescription>
				</AlertDialogHeader>
				<AlertDialogFooter>
					<AlertDialogCancel>Cancel</AlertDialogCancel>
					<AlertDialogAction onClick={() => onOpenChange(false)}>
						Delete
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	);
}

export function DeleteChapterToast({ chapterId }: DeleteChapterToastProps) {
	const { toast } = useToast();

	const handleDelte = () => {
		toast({
			description: `Chapter ${chapterId} deleted`,
			action: <ToastAction altText="undo">Undo</ToastAction>,
		});
	};

	return (
		<DropdownMenuItem onSelect={handleDelte}>
			<Trash className="h-4 w-4 mr-2" /> Delete
		</DropdownMenuItem>
	);
}
