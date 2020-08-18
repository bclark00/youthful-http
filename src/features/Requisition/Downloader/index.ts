import save from "save-file";

export default async function(pdf: Blob) {
  await save(pdf, "Your Requisition.pdf");
}
