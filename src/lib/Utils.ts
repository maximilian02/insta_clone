export function dateDiffInDays(date1: string) {
  const init: any = new Date(date1)
  const today: any = new Date()
  const diffTime = Math.abs(today - init)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  return diffDays
}

export function handleDragEvent(e: React.DragEvent<HTMLDivElement>) {
  e.preventDefault();
};

export function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
  event.stopPropagation();
  event.preventDefault();
}

export default {
  dateDiffInDays,
  handleDragEvent,
  handleDragOver
}
