/**
 * 字符串去重
 */
const str = 'we stay in a severe society.'

// SET
const unique1 = [...new Set(str.replace(/\s/g, ''))].join('')
console.log('unique1', unique1);

