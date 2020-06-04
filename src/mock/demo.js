import Mock from "mockjs";
import { API_BESC_URL } from "../config/besc.config";

export default () => {
  Mock.mock(`${API_BESC_URL}/demoList`, {
    "list|6": [
      {
        "id|+1": 0,
        "name|+1": ["页面一", "页面二", "页面三", "页面四", "页面五", "页面六"],
        'value|+1': ["cirelList", "cirelList2", "cirelList3", "cirelList4", "cirelList5", "cirelList6"]
      },
    ],
    total: 6,
  });
};
