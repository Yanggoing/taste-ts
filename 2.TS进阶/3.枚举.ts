// 枚举
enum Status {
  OFFLINE = 1,
  ONLINE,
  DELETED,
}

// console.log(Status.OFFLINE, Status[0])
// Status[0] undefined
function getResult(status: number) {
  if (status === Status.OFFLINE) {
    return "offline";
  } else if (status === Status.ONLINE) {
    return "online";
  } else if (status === Status.DELETED) {
    return "deleted";
  }
  return "error";
}
