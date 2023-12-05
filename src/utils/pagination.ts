export function paginateArray({
  array,
  page_size,
  page_number,
}: {
  array: any[];
  page_size: number;
  page_number: number;
}) {
  return array.slice(
    (page_number + 1 - 1) * page_size,
    (page_number + 1) * page_size
  );
}
