/**
 * @param path
 */
export function isExternalLink(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

export function checkAge(rule: any, value: number, callback: any) {
  console.log(value)
  if (!value) {
    callback('年龄不能为空');
  } else if (!Number.isInteger(value)) {
    callback('请输入数字值');
  } else if (value < 18) {
    callback('必须年满18岁');
  } else {
    callback();
  }
}
