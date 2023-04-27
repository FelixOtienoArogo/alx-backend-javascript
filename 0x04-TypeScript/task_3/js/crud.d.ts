import {RowID, RowElement}from "./interface.ts";

export function insterRow(row: RowElement): number;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;

