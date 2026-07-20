"use client";

// import { deleteTrial } from "@/lib/actions/trials"; // তোমার প্রজেক্টের সার্ভার অ্যাকশন পাথ অনুযায়ী
import { TrialFormData } from "@/lib/api/exploreTrials";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FiTrash2 } from "react-icons/fi";
import { toast } from "sonner";

interface DeleteModalProps {
    trials: TrialFormData;
}

export function DeleteModal({ trials }: DeleteModalProps) {
    const router = useRouter();

    const handleDelete = async () => {
        // await deleteTrial(trials.id);
        toast.success("Clinical Trial Deleted Successfully!", {
            style: {
                color: "#10b981",
            },
        });
        router.refresh();
    };

    return (
        <AlertDialog>
            <Button className="bg-white border hover:bg-rose-50 border-zinc-200 hover:border-rose-300 rounded-lg p-2 min-w-0 transition-colors cursor-pointer">
                <FiTrash2 className="text-zinc-400 hover:text-rose-600 transition-colors" size={16} />
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 bg-white rounded-2xl border border-zinc-200">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-zinc-900 font-bold">Delete trial permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body className="text-zinc-500 text-sm">
                            <p>
                                This will permanently delete <strong>{trials?.title}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary" className="font-semibold text-zinc-600 border-zinc-200">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger" className="font-semibold bg-rose-600 hover:bg-rose-700 text-white">
                                Delete
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}