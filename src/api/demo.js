import request from "../utils/axios";

export async function getDemoList() {
  return request({
    url: "/demoList",
    method: "get",
  });
}
