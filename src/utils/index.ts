export async function awaiter(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
