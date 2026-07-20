"use client";

import { Table, Button } from "@heroui/react";
import { FiEye, FiTrash2 } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { TrialFormData } from "@/lib/api/exploreTrials";
import { DeleteModal } from "./DeleteModal";

interface TrialsTableProps {
    trials: TrialFormData[];

}

const TrialsTable = ({ trials }: TrialsTableProps) => {
    return (
        <div className="hidden md:block">
            <Table className="bg-white">
                <Table.ScrollContainer>
                    <Table.Content aria-label="Trials Management Table" className="min-w-full">
                        <Table.Header>
                            <Table.Column isRowHeader className="text-zinc-400 font-bold uppercase tracking-wider text-xs py-4 pl-6">
                                Trial Title / ID
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-bold uppercase tracking-wider text-xs py-4">
                                Disease Target
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-bold uppercase tracking-wider text-xs py-4">
                                Hospital Infrastructure
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-bold uppercase tracking-wider text-xs py-4 text-center">
                                Country
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-bold uppercase tracking-wider text-xs py-4 text-center">
                                Phase Index
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-bold uppercase tracking-wider text-xs py-4 text-center">
                                Status
                            </Table.Column>
                            <Table.Column className="text-zinc-400 font-bold uppercase tracking-wider text-xs py-4 pr-6 text-right">
                                Actions
                            </Table.Column>
                        </Table.Header>
                        <Table.Body items={trials}>
                            {(trial) => (
                                <Table.Row
                                    key={trial._id}
                                    className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/50 transition-colors"
                                >
                                    <Table.Cell className="py-4 pl-6">
                                        <div className="flex items-center gap-3">
                                            {trial.image ? (
                                                <div className="relative w-12 h-12 overflow-hidden rounded-xl border border-zinc-200">
                                                    <Image src={trial.image} alt={trial.title} fill className="object-cover" />
                                                </div>
                                            ) : (
                                                <div className="w-12 h-12 bg-zinc-100 rounded-xl border border-zinc-200 flex items-center justify-center text-zinc-400 font-bold text-xs">
                                                    No Img
                                                </div>
                                            )}
                                            <div>
                                                <h4 className="font-bold text-zinc-900 text-sm max-w-[240px] truncate">{trial.title}</h4>
                                                <p className="text-xs font-mono text-zinc-400 max-w-70 truncate">{trial._id}</p>
                                            </div>
                                        </div>
                                    </Table.Cell>

                                    <Table.Cell className="font-semibold text-zinc-700 text-xs">
                                        {trial.disease}
                                    </Table.Cell>

                                    <Table.Cell className="text-xs text-zinc-400 max-w-[200px] truncate">
                                        {trial.hospital}
                                    </Table.Cell>

                                    <Table.Cell className="text-xs font-bold text-zinc-600 text-center">
                                        {trial.country}
                                    </Table.Cell>

                                    <Table.Cell className="text-center">
                                        <span className="text-xs font-semibold px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200/60 text-zinc-600">
                                            {trial.phase}
                                        </span>
                                    </Table.Cell>

                                    <Table.Cell className="text-center">
                                        <span className="text-[11px] font-bold px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 uppercase tracking-wider">
                                            {trial.status}
                                        </span>
                                    </Table.Cell>

                                    <Table.Cell className="py-4 pr-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <Link href={`/manage-trials/${trial._id}`}>
                                                <Button size="sm" className="bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-semibold rounded-lg p-2 min-w-0 transition-colors cursor-pointer">
                                                    <FiEye size={16} />
                                                </Button>
                                            </Link>
                                            <DeleteModal trials={trial} />                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default TrialsTable;