export function copyToClipBoard(copyText: string) {
    navigator.clipboard.writeText(copyText);
}