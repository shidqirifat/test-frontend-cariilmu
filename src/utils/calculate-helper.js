export function convertToHours(data) {
  let hour = 0;
  let minute = 0;

  if (data % 60 > 0) hour = Math.floor(data / 60);
  minute = data % 60;

  return `${hour ? `${hour} jam ${minute} menit` : `${minute} menit`}`;
}

export function convertToMoney(data) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(data);
}
